import React, { useEffect, useState } from "react";
import { getEmployees } from "../api/api";
import EmployeeCard from "./EmployeeCard";
import NothingFound from "../assets/nothing.svg";
import Dropdown from "./Dropdown";
import Loader from "./Loader";
const Home = () => {
  const [employees, setEmployees] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  async function fetch(limit, offset = 0) {
    setLoading(true);
    const employee = await getEmployees(limit, offset);
    setEmployees(employee.data);
    setLoading(false);
  }
  useEffect(() => {
    fetch(limit, offset);
  }, [offset, limit]);
  if (loading) {
    return <Loader />;
  }
  if (employees?.data?.length === 0) {
    return (
      <div className="absolute top-0 right-0 left-0 bottom-0 -z-10 flex flex-col items-center justify-center gap-5">
        <img src={NothingFound} className="sm:w-20 md:w-32 md:h-32" />
        <p className="sm:text-lg md:text-2xl text-gray-800">
          No employees found, list one instead!
        </p>
      </div>
    );
  }
  return (
    <div className="p-7 rounded-lg sm:w-full md:w-3/4 m-auto mb-10">
      <h1 className="text-center font-extralight sm:text-2xl sm:mb-5 lg:text-4xl lg:mb-7">
        List of employees
      </h1>
      <div className="float-right mb-5">
        <Dropdown limit={limit} setLimit={setLimit} setOffset={setOffset} />
      </div>
      <div className="sm:w-full  m-auto flex flex-col sm:gap-4 md:gap-6">
        {employees?.data?.map((employee) => (
          <EmployeeCard
            setLoading={setLoading}
            newResults={fetch}
            employee={employee}
            key={employee._id}
        limit={limit}
            offset={offset}
          />
        ))}
      </div>
      {
        <div className="py-5 font-extralight underline underline-offset-2">
          {offset > 0 && (
            <button
              onClick={() => {
                if (offset - employees?.page.limit >= 0) {
                  setOffset(offset - parseInt(employees?.page.limit));
                }
              }}
              className="underline pl-1 text-xl float-left"
            >
              Prev
            </button>
          )}
          {employees?.page?.total -
            employees?.page?.limit * (offset / employees?.page?.limit) > employees?.page?.limit && (
            <button
              onClick={() => {
                setOffset(employees?.page.nextOffset);
              }}
              className="float-right pr-1 text-xl underline"
            >
              Next
            </button>
          )}
        </div>
      }
    </div>
  );
};

export default Home;
