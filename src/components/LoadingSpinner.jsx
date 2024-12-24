// import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[calc(100vh-305px)]">
      <span className="loading loading-spinner md:w-16 lg:w-32 lg:h-32 text-primary"></span>
      <span className="loading loading-spinner md:w-16 lg:w-32 lg:h-32 text-secondary"></span>
      <span className="loading loading-spinner md:w-16 lg:w-32 lg:h-32 text-accent"></span>
      <span className="loading loading-spinner md:w-16 lg:w-32 lg:h-32 text-neutral"></span>
      <span className="loading loading-spinner md:w-16 lg:w-32 lg:h-32 text-info"></span>
      <span className="loading loading-spinner md:w-16 lg:w-32 lg:h-32 text-success"></span>
      <span className="loading loading-spinner md:w-16 lg:w-32 lg:h-32 text-warning"></span>
      <span className="loading loading-spinner md:w-16 lg:w-32 lg:h-32 text-error"></span>
    </div>
  );
};

export default LoadingSpinner;
