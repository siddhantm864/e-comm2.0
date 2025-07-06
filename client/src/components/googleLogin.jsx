import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginBtn = () => (
  <GoogleLogin
    onSuccess={credentialResponse => {
      console.log("Google login success", credentialResponse);
    }}
    onError={() => {
      console.log("Login Failed");
    }}
  />
);

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    onSuccess: (response) => console.log(response),
    onError: () => console.log('Login Failed'),
  });

  return (
    <button
      onClick={() => login()}
      style={{
        padding: "10px 20px",
        marginTop:"10px",
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

export {GoogleLoginBtn,GoogleLoginButton};