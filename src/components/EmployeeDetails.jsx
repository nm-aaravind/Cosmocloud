import React, { useState, useEffect } from "react";
import UserIcon from "../assets/user.svg";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import { getEmployeeById, removeEmployee } from "../api/api";
import { toast } from "react-toastify";
const EmployeeDetails = () => {
  const { emp_id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    address: {
      line: "",
      city: "",
      country: "",
      zipcode: "",
    },
    contact: {
      method: "",
      value: "",
    },  
  });

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const employee = await getEmployeeById(emp_id);
      setEmployee(employee.data);
      setLoading(false);
    }
    fetch();
  }, []);
  async function deleteEmployee() {
    setLoading(true)
    const response = await removeEmployee(employee._id);
    setLoading(false)
    if(response.status == 200){
      navigate("/")
      toast.success("Deleted employee");
    }
    else{
      toast.error("Something went wrong");
    }
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="p-7">
      <h1 className="text-center font-extralight sm:text-2xl sm:mb-5 lg:text-4xl lg:mb-7">
        Employee Details
      </h1>
      <div className="sm:w-full md:w-3/4 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="py-10 flex flex-col items-center">
          <div className="border-2 border-slate-600 rounded-full">
            <img
              className="sm:w-40 md:w-70 sm:-translate-y-1 md:-translate-y-2"
              src={UserIcon}
            />
          </div>
          <div className="font-bold text-xl my-2 text-center">
            {employee.name}
          </div>
          <p className="text-gray-700 text-base text-center">
            <span className="font-extralight">Employee Id:</span> {employee._id}
          </p>
          <p className="text-gray-700 text-base text-center">
            <span className="font-extralight">Address:</span>{" "}
            {employee.address.line +
              ", " +
              employee.address.city +
              ", " +
              employee.address.country}
          </p>
          <p className="text-gray-700 text-base text-center">
            <span className="font-extralight">{employee.contact.method}:</span>{" "}
            {employee.contact.value}
          </p>
        </div>
        <button
        onClick={() => deleteEmployee()}
        className="bg-red-500 text-white rounded-b hover:bg-red-600 p-2 sm:text-sm md:text-lg w-full transition-colors"
      >
        Remove
      </button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
