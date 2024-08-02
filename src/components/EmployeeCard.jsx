import React from "react";
import { Link } from "react-router-dom";
import { removeEmployee as removeEmployeeAPI } from "../api/api";
const EmployeeCard = ({ employee, newResults, setLoading }) => {
  async function removeEmployee() {
    setLoading(true)
    const response = await removeEmployeeAPI(employee._id);
    setLoading(false)
    if(response.status == 200){
      newResults()
    }
  }
  return (
    <div className="shadow-lg rounded-lg border overflow-hidden">
      <Link
        to={`/details/${employee._id}`}
        className=""
      >
        <div className="mx-auto bg-white  hover:bg-blue-100 transition-colors">
          <div className="px-6 py-4 space-y-1">
            <>
              <span className="text-md font-extralight min-w-28">Name: </span>
              {employee.name}
            </>
            <p className="text-gray-700 text-base">
              <span className="font-extralight">Emp Id:</span> {employee._id}
            </p>
          </div>
        </div>
      </Link>
      <button
        onClick={() => removeEmployee()}
        className="bg-red-500 text-white rounded-b hover:bg-red-600 p-2 sm:text-sm md:text-md w-full transition-colors"
      >
        Remove
      </button>
    </div>
  );
};

export default EmployeeCard;
