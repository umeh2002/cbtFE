import Sider from "./Sider";
import TheQuestions from "./TheQuestions";

const Question = () => {
  return (
    <div className="w-full h-[100vh] flex ">
      <div>
        <Sider />
      </div>
      <div className="flex justify-end w-[100vw]">
        <div className=" w-[calc(100vw-250px)]">
          <TheQuestions />
        </div>
      </div>
    </div>
  );
};

export default Question;
