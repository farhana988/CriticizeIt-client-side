// import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <span className="loading loading-spinner w-12 text-primary"></span>
      <span className="loading loading-spinner w-12 text-secondary"></span>
      <span className="loading loading-spinner w-12 text-accent"></span>
    </div>
  );
};

export default LoadingSpinner;
