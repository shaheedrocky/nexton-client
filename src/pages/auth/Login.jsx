import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../components/common/API";
import store from "../../redux/store";
import { setUser } from "../../redux/slices/userSlice";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = async() => {
    if (!email || !password ) {
      toast.error("Please fill all fields");
    } else if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
    } else if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
    } else {
      try {
        const { data } = await api.post("/auth/login", {
          email,
          password,
        });
        console.log("Token: ", data);
        toast.success(data?.message);
        store.dispatch(setUser(data?.user))
        localStorage.setItem("token", data?.user?.token);
       
      } catch (error) {
        console.log(error);
       toast.error(error);
      }
      // Submit the form data or further actions
    }
  };

  return (
    <div className="flex  mt-10 justify-center ">
      <div className="bg-white ">
        <h1 className="font-poppins text-center font-bold text-xl mb-4">
          Login
        </h1>
        <CustomInput
          inputType={"email"}
          value={email}
          onChange={handleEmail}
          placeholder={"your@gmail.com"}
          label={"Email"}
        />
        <div className="my-2" />
        <CustomInput
          inputType={"password"}
          value={password}
          onChange={handlePassword}
          placeholder={"••••••••"}
          label={"Password"}
        />
        <div className="mb-6" />
        <CustomButton
          disabled={email?.length === 0 || password.length === 0}
          btnTitle={"Login"}
          handleSubmit={handleLoginSubmit}
        />
        {/* ------------- OR ---------------- */}
        <div className="flex items-center justify-center mt-4 mb-2">
          <div className="h-0.5 w-1/3 mr-2 bg-border_color" />
          <p className=" font-poppins font-normal text-xs text-gray-400 ">OR</p>
          <div className="h-0.5 w-1/3 ml-2 bg-border_color" />
        </div>

        <p className="text-center text-xs text-black font-poppins font-normal">
          Already a member?{" "}
          <Link to={"/register"} className="text-blue font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
