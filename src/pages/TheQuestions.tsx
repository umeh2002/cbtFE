import { useState } from "react";
import { useGetAllQuestions } from "../hooks/Hook";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ConfirmSubmit from "./ConfirmSubmit";
// import { answerQuestion } from "../APIs/api";
// import { useSelector } from "react-redux";

const TheQuestions = () => {
  // const user = useSelector((state: any) => state.user);
  const data = useGetAllQuestions();
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="w-full min-h-[100vh] bg-[#F8F8F8] p-[20px] flex flex-col">
      <div className="w-full mt-[20px] p-3">
        {data?.map((el: any) => (
          <div
            className="flex w-[650px] min-h-[100px] border mb-2 p-3 shadow-sm bg-white text-black"
            key={el._id}
          >
            <div>
              <span className="text-[20px] mb-[10px] font-semibold">
                {el.questionText}
              </span>
              <div>
                <input
                  type="radio"
                  name={`question-${el._id}`}
                  id={`option-a-${el._id}`}
                  // onChange={() => handleRadioChange(el._id, "a")}
                  className="hover:cursor-pointer duration-500 transition-all"
                />
                <span className="ml-[7px] text-[15px] font-medium">{el.a}</span>
              </div>
              <div>
                <input
                  type="radio"
                  name={`question-${el._id}`}
                  id={`option-b-${el._id}`}
                  // onChange={() => handleRadioChange(el._id, "b")}
                  className="hover:cursor-pointer duration-500 transition-all"
                />
                <span className="ml-[7px] text-[15px] font-medium">{el.b}</span>
              </div>
              <div>
                <input
                  type="radio"
                  name={`question-${el._id}`}
                  id={`option-c-${el._id}`}
                  // onChange={() => handleRadioChange(el._id, "c")}
                  className="hover:cursor-pointer duration-500 transition-all"
                />
                <span className="ml-[7px] text-[15px] font-medium">{el.c}</span>
              </div>
              <div>
                <input
                  type="radio"
                  name={`question-${el._id}`}
                  id={`option-d-${el._id}`}
                  // onChange={() => handleRadioChange(el._id, "d")}
                  className="hover:cursor-pointer duration-500 transition-all"
                />
                <span className="ml-[7px] text-[15px] font-medium">{el.d}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-[#800080] text-white w-[150px] h-[40px] flex justify-center items-center hover:cursor-pointer duration-500 rounded-[20px] uppercase text-[17px] transition-all"
        onClick={()=>{
          setToggle(true)
        }}
      >
        Submit
      </button>
      <div
        style={{
          position: "fixed",
          top: "50px",
          right: "50px",
          width: "200px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CountdownCircleTimer
          isPlaying
          duration={30}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[600, 300, 150, 0]}
        >
          {({ remainingTime }) =>
            remainingTime === 0 ? (
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "900",
                  color: "#f30606",
                }}
              >
                Time Up
              </div>
            ) : (
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "600",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "40px", lineHeight: 1 }}>
                  {remainingTime}
                </div>
                <span> {remainingTime < 2 ? "sec" : "secs"} Left</span>
              </div>
            )
          }
        </CountdownCircleTimer>
        <div
          style={{
            marginTop: "10px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        ></div>
      </div>
      {toggle && <ConfirmSubmit setToggle={setToggle} />}
    </div>
  );
};

export default TheQuestions;
