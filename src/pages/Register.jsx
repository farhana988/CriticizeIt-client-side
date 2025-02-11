import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";

import logo from "../assets/google-logo.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import reg from "../assets/lottie/reg.json";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, createUser, updateUserProfile, setUser } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.image.value;
    const pass = form.password.value;
    //    validation
    if (pass.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }

    if (!/[a-z]/.test(pass)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(pass)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    try {
      // User Registration
      const result = await createUser(email, pass);
    
      await updateUserProfile(name, photo);
      setUser({ ...result.user, photoURL: photo, displayName: name });


      const userData = {
        email: email,
        name: name,
      };

      await axios.post(
        ` ${import.meta.env.VITE_API_URL}/users`,
        userData
      );
    

      
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Something went wrong. Please try again!",
        confirmButtonText: "Try Again",
      });
    }
  };

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
      navigate("/");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: "Something went wrong with Google login. Please try again!",
        confirmButtonText: "Try Again",
      });
    }
  };

  // dynamic title
  if (location.pathname === "/register") {
    document.title = "CriticizeIt | Register";
  }

  return (
    <div className="pt-20">
      <h2
        className="text-3xl md:text-5xl lg:text-7xl font-bold mb-14
       text-primary dark:text-ivory  active text-center"
      >
        Registration Form
      </h2>
      <div className="hero flex flex-col md:flex-row lg:flex-row justify-center
      ">
        <div className="w-96">
          <Lottie animationData={reg}></Lottie>
        </div>
        <div className="hero-content flex-col ">
          <div className="card bg-lCard dark:bg-dCard  w-full max-w-5xl shrink-0 shadow-2xl">
            <form
              onSubmit={handleSignUp}
              className="card-body w-96 lg:w-[500px]"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-bold text-2xl text-gray-600
                  dark:text-ivory">
                    Name
                  </span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered break-words bg-lCard dark:bg-dCard "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600 dark:text-ivory  font-bold text-2xl">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-lCard dark:bg-dCard "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600 dark:text-ivory  font-bold text-2xl">
                    Photo Url
                  </span>
                </label>
                <input
                  type="Url"
                  name="image"
                  placeholder="photoUrl"
                  className="input input-bordered bg-lCard dark:bg-dCard "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600 dark:text-ivory font-bold text-2xl">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-lCard dark:bg-dCard "
                  required
                />
              </div>
              {error && <p className="text-red-900">{error}</p>}
              <div className="form-control mt-6">
                <button className="btn  bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary   font-bold 
             text-lg lg:text-2xl text-black ">
                  Register
                </button>
              </div>
              <h2 className="text-lg mt-3 flex items-center gap-2">
                Already have an account?
                <Link to="/login">
                  <span className="underline flex items-center gap-4 dark:text-ivory text-primary active text-2xl font-extrabold">
                    <FaLongArrowAltRight />
                    Log in
                  </span>
                </Link>
              </h2>
            </form>
            <div className="divider text-primary dark:text-ivory font-bold text-xl">OR</div>
            <div className="space-y-4">
              <button
                onClick={handleGoogleSignIn}
                className="pb-8 w-full flex items-center justify-center gap-2"
              >
                <img src={logo} alt="Google" className="w-6 h-6" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
