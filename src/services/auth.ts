import axios from "axios";
import { GITHUB_URL } from "../constants/util";

export const getAuthenticatedUser = async (token: string) => {
  const response = await axios.get(`${GITHUB_URL}/user`, {
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github+json",
    },
  });
  return response.data;
};
