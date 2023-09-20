import React from "react";
import ExportImg from "../assets/countryStats/exportpart.png";

const CountryExportCard = ({ firstValue, secondValue }) => {
  return (
    <div className="bg-opacity-0 backdrop-blur-[2px] w-30 h-20 rounded-lg shadow-2xl border p-2 pt-1">
      <div className="flex ml-8">
        <div className="text-black text-md font-bold ">#{firstValue}</div>
        <img src={ExportImg} alt="Relation Image" className="w-13 h-8 ml-1" />
      </div>

      <div className="flex text-center text-gray-600 text-sm">{secondValue}</div>
    </div>
  );
};

export default CountryExportCard;
