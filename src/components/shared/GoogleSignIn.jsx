import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/google-logo.png";
import { AuthContext } from "../../providers/AuthProvider";
import { errorToast, successToast } from "../../utils/toast";

const GoogleSignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  // Google Signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();

      successToast("Login Successful");
      navigate(from, { replace: true });
    } catch {
      errorToast(
        "Google Login Failed",
        "Something went wrong with Google login. Please try again!",
      );
    }
  };
  return (
    <div className="space-y-4">
      <button
        onClick={handleGoogleSignIn}
        className="pb-8 w-full flex items-center justify-center gap-2"
      >
        <img src={logo} alt="Google" className="w-6 h-6" />
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
