import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRePassword = (event) => {
    setRePassword(event.target.value);
  };

  const handleRegisterSubmit = () => {
    if (!email || !password || !rePassword) {
      toast.error("Please fill all fields");
    } else if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
    } else if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
    } else if (password !== rePassword) {
      toast.error("Passwords do not match");
    } else {
      toast.success("Registration Successful");
      // Submit the form data or further actions
    }
  };
  return (
    <div className="flex  mt-10 justify-center ">
      <div className="bg-white ">
        <h1 className="font-poppins text-center font-bold text-xl mb-4">
          Register
        </h1>
        <CustomInput
          value={email}
          inputType={"email"}
          onChange={handleEmail}
          placeholder={"your@gmail.com"}
          label={"Email"}
        />
        <div className="my-2" />
        <CustomInput
          value={password}
          inputType={"password"}
          onChange={handlePassword}
          placeholder={"••••••••"}
          label={"Password"}
        />

        <div className="my-2" />
        <CustomInput
          value={rePassword}
          inputType={"password"}
          onChange={handleRePassword}
          placeholder={"••••••••"}
          label={"Password (Again)"}
        />
        <div className="mb-6" />
        <CustomButton
          disabled={
            email?.length === 0 ||
            password.length === 0 ||
            rePassword.length === 0
          }
          btnTitle={"Register"}
          handleSubmit={handleRegisterSubmit}
        />

        {/* ------------- OR ---------------- */}
        <div className="flex items-center justify-center mt-4 mb-2">
          <div className="h-0.5 w-1/3 mr-2 bg-border_color" />
          <p className=" font-poppins font-normal text-xs text-gray-400 ">OR</p>
          <div className="h-0.5 w-1/3 ml-2 bg-border_color" />
        </div>

        <p className="text-center text-xs text-black font-poppins font-normal">
          Already a member?{" "}
          <Link to={"/login"} className="text-blue font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
