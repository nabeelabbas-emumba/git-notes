import { AUTH_STORAGE_KEY } from "./util";

export const getHeaders = () => {
  const data = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)!);
  if (data) {
    const { token } = data.state;
    return {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github+json",
      },
    };
  }
};
