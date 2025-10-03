import React from "react";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const provider = new GithubAuthProvider();
provider.addScope("gist");

export const GithubLogin = ({ children }: any) => {
  const handleLogin = async () => {
    console.log("Login button clicked");
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);

      // Extract GitHub credential
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      console.log("GitHub Token:", token);
      console.log("Firebase User:", user);

      // You can also call GitHub APIs here with token
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
