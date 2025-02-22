// import React from 'react';

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import logo from '../assets/google-logo.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import log from "../assets/lottie/login.json"


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    const { signIn, signInWithGoogle } = useContext(AuthContext)
  
    // Google Signin
    const handleGoogleSignIn = async () => {
      try {
        await signInWithGoogle()
  
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true })
      } catch {
        Swal.fire({
          icon: 'error',
          title: 'Google Login Failed',
          text: 'Something went wrong with Google login. Please try again!',
          confirmButtonText: 'Try Again',
        });
      }
    }
  
    // Email Password Signin
    const handleSignIn = async e => {
      e.preventDefault()
      const form = e.target
      const email = form.email.value
      const pass = form.password.value
      
      try {
        //User Login
        await signIn(email, pass)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true })
      } catch {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Something went wrong. Please try again!',
          confirmButtonText: 'Try Again',
        });
      }
    }
    

      // dynamic title

  if(location.pathname==='/login')
        
      { document.title= 'CriticizeIt | Login' }

    return (
      <div className="pt-20">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-14 text-primary 
        dark:text-ivory
          active text-center
       ">
            Login Form
          </h2>
       
      <div className="hero flex flex-col md:flex-row lg:flex-row justify-center">
      <div className="w-80">
        <Lottie animationData={log}></Lottie>
        </div>
        <div className="hero-content flex-col ">
          
         
          <div className="card bg-lCard dark:bg-dCard w-full max-w-5xl 
          shrink-0 shadow-2xl shadow-primary">
            <form onSubmit={handleSignIn} className="card-body w-96 lg:w-[500px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-2xl text-gray-600
                  dark:text-ivory">Email</span>
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
                  <span className="label-text font-bold text-2xl text-gray-600
                  dark:text-ivory">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-lCard dark:bg-dCard "
                  required
                />
                <label  className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-xl text-gray-500
                    dark:text-ivory"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-primary via-secondary to-accent
             hover:from-primary hover:to-primary   font-bold 
             text-lg lg:text-2xl text-black ">Login</button>
              </div>

              <h2 className="text-lg mt-3 flex items-center gap-2">
                No account yet?{" "}
                <Link to="/register">
                  <span className=" flex items-center gap-4  hover:underline
                   text-primary dark:text-ivory active text-2xl font-extrabold">
                    <FaLongArrowAltRight />Register
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

export default Login;