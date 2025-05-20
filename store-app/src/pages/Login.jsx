import React from "react";

const Login = () => {
  return (
    <div className="loginDiv">
      <div className="h-[400px] w-10/12 sm:w-[450px] bg-white rounded-[15px] p-5 flex flex-col justify-center">
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="w-[7px] h-[39px] bg-yellow-500"></span>
          <h1 className="text-3xl sm:text-4xl font-montserrat font-[600] uppercase">
            Store app
          </h1>
        </div>
        <div className="my-2 font-montserrat text-center">
          <h3 className="text-xl font-medium">SIGN IN</h3>
          <p className="text-label text-label-color mt-1">
            Enter your credentials to accsess your account
          </p>
        </div>
        <form
          action=""
          className="flex flex-col text-left p-3 font-montserrat gap-1"
        >
          <label
            htmlFor="email"
            className="text-label hover:cursor-pointer hover:after:content-[':admin@aa.com']"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="loginInput"
            required
          />
          <label
            htmlFor="password"
            className="text-label hover:cursor-pointer hover:after:content-[':admin@aa.com']"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="loginInput"
            required
          />
          <button className="bg-main h-10 text-white rounded-[4px] hover:opacity-90 mt-2">
            Sign in
          </button>
         <p className="flex justify-center items-center flex-wrap mt-1 text-label">
            <span className="text-label-color font-[400]">Forgot your password?</span>
            <span className=" text-main underline ml-1">Reset password</span>
         </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
