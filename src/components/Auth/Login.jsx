import React, { useState } from "react";
import { useLoginUser } from "../../utils/auth/login_user";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { mutate: loginUser } = useLoginUser();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginUser = () => {
    loginUser({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div className="h-screen w-full flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-2 bg-yellow-500 bg-opacity-80 p-8 w-2/6 rounded-xl">
        <input
          className="border border-gray-100 py-2 px-4 rounded-md"
          onChange={handleInputChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="border border-gray-100 py-2 px-4 rounded-md"
          onChange={handleInputChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <button
          className="rounded-md bg-red-600 py-2 text-white"
          onClick={() => handleLoginUser()}
        >
          Login
        </button>
      </div>
      <Link to={"/register"}>
        <button className="px-4 py-2 bg-red-600 outline-none text-white font-semibold rounded-full">
          Register
        </button>
      </Link>
    </div>
  );
};

export default Login;
