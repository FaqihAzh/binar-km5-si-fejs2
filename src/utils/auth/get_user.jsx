import { useQuery } from "@tanstack/react-query";
import http from "../http";
import { API_ENDPOINT } from "../constants/endpoints";

const fetchUserData = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http
    .get(_key)
    .then((value) => {
      // let DataHasil = {
      //   nama: value.data.data.name,
      //   email: value.data.data.email,
      // };
      return value;
    })
    .catch((err) => {
      if (err.response.status === 401) {
        window.location.href = "/login";
      }
    });
  return data;
};

const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchUserData);
};

export { fetchUserData, useGetDataUser };
