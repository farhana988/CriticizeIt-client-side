import { useContext } from "react";

import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/google-logo.png";
import { AuthContext } from "../../providers/AuthProvider";

const GoogleSignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  // Google Signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: "Something went wrong with Google login. Please try again!",
        confirmButtonText: "Try Again",
      });
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
