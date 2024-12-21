import { NavLink } from "react-router-dom";
import "animate.css";
import { FaLongArrowAltRight } from "react-icons/fa";

function ErrorPage() {
  return (
    <div className="error-page bg-gradient-to-r from-teal-200 via-blue-200 to-purple-200 min-h-screen flex items-center justify-center text-gray-800 px-5">
      <div className="text-center p-12 bg-white bg-opacity-80 rounded-lg shadow-lg max-w-3xl w-full animate__animated animate__fadeIn animate__delay-0.1s ">
        <h1 className="text-6xl font-extrabold mb-4 animate__animated animate__zoomIn animate__delay-1s text-teal-600">
        Hmm...{" "}
        </h1>

        <p className="text-xl mb-6 opacity-80 animate__animated animate__fadeIn animate__delay-2s text-gray-600">
        seems like you have lost that page in the digital void
        </p>

        <div className="flex justify-center items-center gap-8 animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-3xl font-semibold opacity-90 text-gray-500 flex items-center gap-4">
          Lets get you to <FaLongArrowAltRight />
          </h2>
          <span className="text-4xl font-bold text-teal-500 hover:text-teal-600 transition-all duration-300 animate__animated animate__bounceIn animate__delay-4s">
            <NavLink to={"/"}>Home! </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
