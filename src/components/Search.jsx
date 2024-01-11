import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function Search(props) {
  return (
    <div>
      <div className="w-screen flex justify-center items-center">
        <form className="max-w-2xl">
          <div
            className={`rounded-lg transition-all ease-in-out w-[500px] duration-500 relative`}
          >
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <div className="w-5 h-5 text-gray-500 flex items-center text-xl">
                <IoSearchSharp />
              </div>
            </div>

            <input
              type="search"
              className={`w-full block p-4 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Search cuntry name"
              onChange={(e) => props.setSearch(e.target.value.toLowerCase())}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
