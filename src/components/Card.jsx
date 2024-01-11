import React from "react";

export default function card(props) {

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div>
      <div className="h-[400px] bg-gradient-to-br from-slate-50 to-gray-50 shadow-md border border-gray-200 rounded-lg w-[250px] max-w-xs lg:max-w-sm">
        <div className="mt-5 h-[150px] flex justify-center items-center">
          <img
            className="h-[100px] bg-auto hover:-translate-y-1 hover:scale-110 duration-300"
            src={props.flag}
          />
        </div>
        <div className="h-50 p-5">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-5">
            {props.name}
          </h5>
          <p className="font-normal text-gray-700 mb-1">
            Region: {props.region}
          </p>
          <p className="font-normal text-gray-700 mb-1">Area: {props.area}</p>
          <p className="font-normal text-gray-700 mb-1">
          Population: {formatNumber(props.population)}
          </p>
        </div>
      </div>
    </div>
  );
}
