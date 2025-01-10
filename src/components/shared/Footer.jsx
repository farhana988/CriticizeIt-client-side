// import React from 'react';

import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mt-20 py-10">
      <footer className="footer  text-base-content p-10  container mx-auto">
        <nav>
          <div className=" w-full md:w-60 lg:w-96 space-y-2">
            <h4 className="text-2xl text-[#28251e] font-bold">
            CriticizeIt
            </h4>
            <p>
              We are a platform dedicated to helping users discover, review, and
              recommend services. Our mission is to provide reliable feedback,
              empowering users to make informed decisions.
              Trust, transparency, and user-driven insights are at the heart of
              everything we do.
            </p>
           
            <div className="flex items-center gap-2 border-2 mr-36 md:mr-12 lg:mr-48 
            rounded-full px-4 border-slate-700">
              <a href="">Learn More About Us </a>
              <FaLongArrowAltRight />
            </div>
          </div>
        </nav>
        <nav>
          <h4 className="text-2xl font-bold text-[#28251e]">Quick Links</h4>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/faq">FAQ</a>
          <a href="/support">Support</a>
        </nav>
        <nav>
          <h6 className="text-2xl font-bold text-[#28251e]">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://youtube.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://facebook.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <div className="divider"></div>
      <aside className="text-center text-xl text-black">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <i>CriticizeIt</i>
        </p>
      </aside>
    </div>
  );
};

export default Footer;
