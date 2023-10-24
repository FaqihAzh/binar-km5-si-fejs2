import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import { useGetDataUser } from "../utils/auth/get_user";

const Dashboard = () => {
  const navigate = useNavigate();
  const { data } = useGetDataUser({});

  const handleLogout = () => {
    CookieStorage.remove(CookieKeys.AuthToken, {
      path: "/",
      expires: new Date(0),
    });

    navigate("/login");
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen w-full p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 outline-none text-white font-semibold rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
