import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../constants/endpoints";
import http from "../http";
import { CookieKeys, CookieStorage } from "../cookies";
import { useNavigate } from "react-router-dom";

const LoginUser = async (input) => {
  try {
    const result = await http.post(API_ENDPOINT.LOGIN, input);
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const useLoginUser = () => {
  const navigate = useNavigate();

  return useMutation(LoginUser, {
    onSuccess: () => {
      navigate("/");
    },
  });
};

export { LoginUser, useLoginUser };
