/* eslint-disable react/prop-types */

import { TfiFaceSad } from "react-icons/tfi";

const NoData = ({ title, subtitle }) => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center gap-3 my-40 active
         text-xl font-bold"
      >
        <TfiFaceSad className="text-7xl " />
        <p className="opacity-50">{title}</p>
        <p className="opacity-50">{subtitle}</p>
      </div>
    </div>
  );
};

export default NoData;
