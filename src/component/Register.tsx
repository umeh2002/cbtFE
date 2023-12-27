import { useState } from "react";
import { registerUser } from "../APIs/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { createUser } from "../global/Redux";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState<Boolean>(false);
  const [isFocused1, setIsFocused1] = useState<Boolean>(false);
  const [isFocused2, setIsFocused2] = useState<Boolean>(false);

  const [email, setEmail] = useState<string | any>("");
  const [name, setName] = useState<string | any>("");
  const [regNum, setregNum] = useState<string | any>("");

  const [inputValue, setInputValue] = useState<String | any>("");
  const [error, setError] = useState<String | any>("");

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    setError("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setError("Please fill out this field");
    } else {
      console.log("Form submitted:", inputValue);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col text-white bg-purple-500 ">
      <form
        onSubmit={handleSubmit}
        className="w-[450px] min-h-[200px] rounded-sm bg-[#ffffff] text-black shadow-md p-3"
      >
        <div className="text-[20px] flex justify-center items-center font-semibold mb-1">
          Welcome, it good to have you here
        </div>
        <span className="text-[17px] flex justify-center items-center font-semibold mb-3">
          fill in your details to get started
        </span>
        <div className="mb-3">
          <span className="font-semibold text-[17px]">name</span>
          <input
            type="text"
            placeholder="enter your name"
            className={`w-full h-[40px] rounded-md pl-[5px] outline-none placeholder:text-[14px]  border ${
              isFocused ? "border-blue-500" : "border-gray-500"
            }`}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            value={name}
            onChange={(e: any) => {
              handleInputChange(e);
              setName(e.target.value);
            }}
          />
          {error && (
            <span className="flex justify-end text-[12px] text-red-500">
              {error}
            </span>
          )}
        </div>

        <div className="mb-3">
          <span className="font-semibold text-[17px]">email</span>
          <input
            type="text"
            placeholder="enter your email"
            className={`w-full h-[40px] rounded-md pl-[5px] outline-none placeholder:text-[14px]  border ${
              isFocused1 ? "border-blue-500" : "border-gray-500"
            }`}
            onFocus={() => {
              setIsFocused1(true);
            }}
            onBlur={() => {
              setIsFocused1(false);
            }}
            value={email}
            onChange={(e: any) => {
              handleInputChange(e);
              setEmail(e.target.value);
            }}
          />
          {error && (
            <span className="flex justify-end text-[12px] text-red-500">
              {error}
            </span>
          )}
        </div>

        <div className="mb-3">
          <span className="font-semibold text-[17px]">regNum</span>
          <input
            type="text"
            placeholder="enter your registration number"
            className={`w-full h-[40px] rounded-md pl-[5px] outline-none placeholder:text-[14px]  border ${
              isFocused2 ? "border-blue-500" : "border-gray-500"
            }`}
            onFocus={() => {
              setIsFocused2(true);
            }}
            onBlur={() => {
              setIsFocused2(false);
            }}
            value={regNum}
            onChange={(e: any) => {
              handleInputChange(e);
              setregNum(e.target.value);
            }}
          />
          {error && (
            <span className="flex justify-end text-[12px] text-red-500">
              {error}
            </span>
          )}
        </div>
        <button
          className="w-full h-[40px] rounded-md hover:cursor-pointer duration-500 transition-all bg-black text-white mt-2 text-[17px]"
          onClick={() => {
            registerUser({ name, email, regNum }).then((res: any) => {
              if (res) {
                Swal.fire({
                  icon: "success",
                  title: "user created",
                  text: "directing you to see exam instructions",
                  timerProgressBar: true,
                  timer: 5000,
                });
                dispatch(createUser(res));
                navigate("/exam-instruction");
              } else {
                Swal.fire({
                  icon: "error",
                  title: "user not created",
                  text: "internet connection is not established",
                  timerProgressBar: true,
                  timer: 5000,
                });
              }
            });
          }}
        >
          Start
        </button>
      </form>
    </div>
  );
};

export default Register;
