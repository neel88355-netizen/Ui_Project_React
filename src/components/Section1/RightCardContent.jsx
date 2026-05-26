import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const RightCardContent = (props) => {
    console.log(props);
    
  return (
    <div className="h-full w-full absolute top-0 left-0 p-7 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full size-10 flex justify-center items-center">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-lg leading-normal text-white mb-14">
          {props.users.intro}
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className="text-white font-medium px-8 py-2 rounded-full"
          >
            {props.users.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className="text-white font-medium px-3 py-2 rounded-full"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
