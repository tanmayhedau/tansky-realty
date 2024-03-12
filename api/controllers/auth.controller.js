import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      throw errorHandler(400, 'Username, email, or password cannot be empty.');
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(201).send({ success: true, message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};


export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw errorHandler(400, "Email and password cannot be empty");
    }

    const validUser = await User.findOne({ email });
    if (!validUser) {
      throw errorHandler(404, "User not found");
    }

    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) {
      throw errorHandler(401, 'Invalid password');
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...userInfo } = validUser._doc;

    return res.cookie('access_token', token, { httpOnly: true }).status(200).json(userInfo);

  } catch (error) {
    next(error);
  }
};