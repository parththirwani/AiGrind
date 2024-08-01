import { CheckCircle2 } from "lucide-react";
import codeImg from "../../public/assets/code.jpg";
import { checklistItems } from "./constants";

const Workflow = () => {
  return (
    <div id="Playground" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-5">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-gray-500 to-gray-800 text-transparent bg-clip-text">
          Prepration.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
  <div className="pt-12 w-full lg:w-1/2 flex flex-wrap mb-40">
    {checklistItems.slice(0, 2).map((item, index) => (
      <div key={index} className="flex mb-12 w-full">
        <div className="text-green-800 mx-6 bg-white h-10 w-10 p-2 justify-center items-center rounded-full">
          <CheckCircle2 />
        </div>
        <div>
          <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
          <p className="text-md text-neutral-500">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
  <div className="pt-12 w-full lg:w-1/2 flex flex-wrap mb-40">
    {checklistItems.slice(2).map((item, index) => (
      <div key={index} className="flex mb-12 w-full">
        <div className="text-green-800 mx-6 bg-white h-10 w-10 p-2 justify-center items-center rounded-full">
          <CheckCircle2 />
        </div>
        <div>
          <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
          <p className="text-md text-neutral-500">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Workflow;