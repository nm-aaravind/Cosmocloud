import Layout from "./components/Layout";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeForm from "./components/EmployeeForm";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="details/:emp_id" element={<EmployeeDetails/>} />
          <Route path="add-employee" element={<EmployeeForm/>} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
