import React, { useEffect, useState } from "react";
import { getEmployees } from "../api/api";
import EmployeeCard from "./EmployeeCard";
import NothingFound from "../assets/nothing.svg"
import Loader from "./Loader";
import Pagination from "./Pagination";
const Home = () => {
  const [employees, setEmployees] = React.useState([]);
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10)
  async function fetch() {
    setLoading(true)
    const employee = await getEmployees();
    setEmployees(employee.data);
    setLoading(false)
  }
  useEffect(() => {
    fetch();
  }, []);
  if(loading){
    return <Loader />
  }
  if(employees?.data?.length === 0){
    return <div className="absolute top-0 right-0 left-0 bottom-0 -z-10 flex flex-col items-center justify-center gap-5">
      <img src={NothingFound} className="sm:w-20 md:w-32 md:h-32" />
      <p className="sm:text-lg md:text-2xl text-gray-800">
        No employees found, list one instead!
      </p>
    </div>
  } 
  return (
    <div className="p-7 rounded-lg sm:w-full md:w-3/4 m-auto">
      <h1 className="text-center font-extralight sm:text-2xl sm:mb-5 lg:text-4xl lg:mb-7">
        List of employees
      </h1>
      <div className="float-right font-extralight sm:text-lg md:text-xl -mt-3 mb-4">
        <span>Results per page</span>
        
      </div>
      <div className="sm:w-full  m-auto flex flex-col sm:gap-4 md:gap-6">
      {
        employees?.data?.map((employee, index) => <EmployeeCard setLoading={setLoading} newResults={fetch} employee={employee} key={employee._id} /> )
      }
      </div>
      {/* <Pagination
            totalPages={.pagination.totalPages}
            page={hotels?.pagination.page}
            onPageChange={setPageNumber}
          /> */}
    </div>
  );
};

export default Home;
