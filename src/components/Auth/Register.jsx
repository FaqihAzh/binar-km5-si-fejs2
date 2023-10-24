import React, { useState } from "react";
import { useCreateUser } from "../../utils/auth/register_user";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { mutate: registerUser, isSuccess, error } = useCreateUser();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterUser = () => {
    registerUser({
      email: formData.email,
      name: formData.username,
      password: formData.password,
    });
  };

  if (error) {
    console.log(error.response.data.message);
  }

  console.log(formData);
  console.log(isSuccess, "isSuccess");
  console.log(error, "Error");

  return (
    <div className="h-screen w-full flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-2 bg-yellow-500 bg-opacity-80 p-8 rounded-xl w-2/6">
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
          name="username"
          type="text"
          placeholder="Username"
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
          onClick={() => handleRegisterUser()}
        >
          Register
        </button>
      </div>
      <Link to={"/login"}>
        <button className="px-4 py-2 bg-red-600 outline-none text-white font-semibold rounded-full">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Register;
