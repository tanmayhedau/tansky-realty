import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id=""
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id=""
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id=""
        />
        <button className="border p-3 rounded-lg bg-slate-700 uppercase font-semibold text-white hover:opacity-90 disabled:opacity-80">
          sign up
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-red-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
