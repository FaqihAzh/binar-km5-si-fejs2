import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../constants/endpoints";
import http from "../http";
import { useNavigate } from "react-router-dom";

const RegisterUser = async (input) => {
  const { data } = await http.post(API_ENDPOINT.REGISTER, input);
  return data;
};

const useCreateUser = () => {
  const navigate = useNavigate();
  return useMutation(RegisterUser, {
    onSuccess: () => {
      navigate("/login");
    },
  });
};

export { RegisterUser, useCreateUser };
