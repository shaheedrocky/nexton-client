import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../components/common/API";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRePassword = (event) => {
    setRePassword(event.target.value);
  };

  const handleRegisterSubmit = async () => {
    if (!email || !email || !password || !rePassword) {
      toast.error("Please fill all fields");
    } else if (name?.length < 3) {
      toast.error("Name should be at least 3 characters long");
    } else if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
    } else if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
    } else if (password !== rePassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const { data } = await api.post("/auth/register", {
          name,
          email,
          password,
        });
        toast.success(data?.message);
      } catch (error) {
        console.log(error);
        if (error.response?.data?.error.includes("duplicate key error")) {
          toast.error("Name already exists. Please choose a different name.");
        } else {
          toast.error(error.response?.data?.message || error.message);
        }
      }
    }
  };

  return (
    <div className="flex  mt-10 justify-center ">
      <div className="bg-white ">
        <h1 className="font-poppins text-center font-bold text-xl mb-4">
          Register
        </h1>
        <CustomInput
          value={name}
          inputType={"text"}
          onChange={handleName}
          placeholder={"your name"}
          label={"Name"}
        />
        <div className="my-2" />
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
