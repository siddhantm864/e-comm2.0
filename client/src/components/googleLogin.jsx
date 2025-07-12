import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const handleGoogleSuccess1 = async (response) => {
  console.log("Google signup/login success", response);
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URI}/api/auth/google-signup`,
      {
        credential: response.credential,
      }
    );
    console.log("Google signup/login success", res.data);
  } catch (err) {
    console.log("google signup/login failed", err);
  }
};

const handleGoogleSuccess2 = async (tokenResponse) => {
  console.log("Google token response", tokenResponse);

  try {
    const userInfo = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      }
    );

    console.log("Google user info:", userInfo.data);

    // Then send to your backend
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URI}/api/auth/google-signup`,
      {
        user: userInfo.data,
        token: tokenResponse.access_token,
      }
    );

    console.log("Google signup/login success", res.data);
  } catch (err) {
    console.log("google signup/login failed", err);
  }
};


const GoogleLoginBtn = () => (
  <GoogleLogin
    onSuccess={handleGoogleSuccess1}
    onError={() => {
      console.log("Login Failed");
    }}
  />
);

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    onSuccess: handleGoogleSuccess2,
    onError: () => console.log("Login Failed"),
    flow: "implicit", // or 'auth-code' depending on your backend
  });

  return (
    <button
      onClick={() => login()}
      style={{
        padding: "10px 20px",
        marginTop: "10px",
        fontSize: "16px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#4285F4",
        color: "white",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google logo"
        style={{ width: "20px", height: "20px" }}
      />
      Continue with Google
    </button>
  );
};

export { GoogleLoginBtn, GoogleLoginButton };
