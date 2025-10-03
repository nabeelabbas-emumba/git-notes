import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

import React from "react";

const provider = new GithubAuthProvider();
provider.addScope("gist");

export const GithubLogin = ({ children }: any) => {
  const handleLogin = async () => {
    console.log("Login button clicked");
    try {
      const result = await signInWithPopup(auth, provider);

      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      console.log("GitHub Token:", token);
      console.log("Firebase User:", user);
    } catch (error: any) {
      console.error("GitHub login error:", error);
      const pendingCred = GithubAuthProvider.credentialFromError(error);
      if (pendingCred) {
        console.log("Pending credential:", pendingCred);
      }
    }
  };

  return React.cloneElement(children, {
    onClick: handleLogin,
  });
};

export default GithubLogin;
