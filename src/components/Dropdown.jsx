import React, { useState } from "react";
const Dropdown = ({
    limit, setLimit, setOffset
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <div className="flex font-extralight text-gray-900 whitespace-nowrap sm:text-md md:text-lg gap-3 z-50">
      <label className="pt-2">Results per page</label>
      <div className="relative">
        <button
          className="w-10 mt-1 justify-between rounded border bg-white z-20 border-black hover:bg-blue-100 transition-colors cursor-pointer" onClick={() => setIsDropdownOpen(prev => !prev)}
        >
          <span className="flex">
            <p className="w-full py-1 text-center font-light">{limit}</p>
          </span>
        </button>
        {isDropdownOpen && (
          <div className="sm:text-md md:text-lg font-light z-30 rounded bg-cloud bg-white absolute mt-3 w-full text-center">
            <ul className="flex text-lg flex-col overflow-hidden rounded border border-black">
              <li className="cursor-pointer py-1 border-b hover:bg-blue-100 border-black" onClick={() =>{
                setLimit(2)
                setOffset(0)
                setIsDropdownOpen((prev) => !prev)
              }}>2</li>
              <li className="cursor-pointer border-b py-1 hover:bg-blue-100 border-black" onClick={() =>{
                setLimit(5)
                setOffset(0)
                setIsDropdownOpen((prev) => !prev)

              }}>5</li>
              <li className="cursor-pointer py-1 border-b hover:bg-blue-100 border-black" onClick={() =>{
                setLimit(8)
                setOffset(0)
                setIsDropdownOpen((prev) => !prev)

              }}>8</li>
              <li className="cursor-pointer py-1 hover:bg-blue-100" onClick={() =>{
                setLimit(10)
                setOffset(0)
                setIsDropdownOpen((prev) => !prev)

              }}>10</li>
            </ul>
          </div>
        )} 
      </div>
    </div>
  );
};

export default Dropdown;