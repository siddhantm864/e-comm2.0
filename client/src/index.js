import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="530389013023-7lt82nc0h1f7gn8n6pv3svns2vd5k8f2.apps.googleusercontent.com">
      <App />
  </GoogleOAuthProvider>
  </React.StrictMode>
);
