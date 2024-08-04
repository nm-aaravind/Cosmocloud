import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createEmployee } from "../api/api";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
const EmployeeForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const { register, handleSubmit, formState, reset, watch } = useForm({
    mode: "onChange",
    defaultValues: {
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
    },
  });
  const { errors } = formState;

  const watchContactMethod = watch("contact.method");
  
  async function formSubmit(data) {
    setSubmitting(true)
    const upload = await createEmployee(data);
    if(upload.status == 201){
      setSubmitting(false)
      reset()
      navigate(`/details/${upload.data.id}`)
      toast.success("Created employee");
    }
    else{
      setSubmitting(false)
      toast.error("Something went wrong");
    }
  }
  if(submitting){
    return <Loader />
  }
  return (
    <div className="p-7 rounded-lg sm:w-full md:w-3/4 m-auto font-light">
      <h1 className="text-center font-extralight sm:text-2xl sm:mb-5 lg:text-4xl lg:mb-7">
        Enter employee details
      </h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        id="contactForm"
        className="space-y-8 sm:w-full md:w-3/4 m-auto"
      >
        <div>
          <label htmlFor="name" className="block text-md text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-600 font-mukta sm:text-sm lg:text-md absolute">
              {errors.name.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="address" className="block text-md text-gray-700">
            Address Line
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            {...register("address.line", { required: "Address is required" })}
          />
          {errors.address?.line && (
            <span className="text-red-600 font-mukta sm:text-sm lg:text-md absolute">
              {errors.address.line.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="city" className="block text-md text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            {...register("address.city", { required: "City is required" })}
          />
          {errors.address?.city && (
            <span className="text-red-600 font-mukta sm:text-sm lg:text-md absolute">
              {errors.address.city.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="country" className="block text-md text-gray-700">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            {...register("address.country", { required: "Country is required" })}
          />
          {errors.address?.country && (
            <span className="text-red-600 font-mukta sm:text-sm lg:text-md absolute">
              {errors.address.country.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="zipcode" className="block text-md text-gray-700">
            Zipcode
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            {...register("address.zipcode", {
              required: "Zipcode is required",
              pattern: {
                value: /^\d+$/,
                message: "Enter zipcode without special characters"
              }
            })}
          />
          {errors.address?.zipcode && (
            <span className="text-red-600 font-mukta sm:text-sm lg:text-md absolute">
              {errors.address.zipcode.message}
            </span>
          )}
        </div>
        <div className="relative">
          <label className="block text-md font-light text-gray-700">
            Preferred Contact Method
          </label>
          <div className="mt-2 flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="Email"
                className="form-radio"
                {...register("contact.method", { required: "This is required" })}
              />
              <span className="ml-2">Email</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="Phone"
                className="form-radio"
                {...register("contact.method", { required: "Select a method" })}
              />
              <span className="ml-2">Phone</span>
            </label>
          </div>
          {errors.contact?.method && (
            <span className="text-red-600 font-mukta sm:text-sm lg:text-md absolute top-14">
              {errors.contact.method.message}
            </span>
          )}
        </div>
        {watchContactMethod && (
          <div>
            <label
              htmlFor="zipcode"
              className="block text-md text-gray-700"
            >
              {watchContactMethod}
            </label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              {...register("contact.value", {
                required: `${watchContactMethod} is required`,
                pattern: {
                  value:
                    watchContactMethod === "Email"
                      ? /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                      : /^\d+$/,
                  message: `Enter a valid ${watchContactMethod}`,
                },
              })}
            />
            {errors.contact?.value && (
              <span className="text-red-600 font-mukta sm:text-sm lg:text-md absolute">
                {errors.contact.value.message}
              </span>
            )}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 transition-colors active:ring-2 text-white mt-10 py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
