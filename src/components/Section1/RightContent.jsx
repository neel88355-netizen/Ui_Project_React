import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full p-6 flex overflow-x-auto flex-nowrap gap-10 w-2/3"
    >
      <div className="flex gap-10 animate-scroll w-max">
        {props.users.map((value, index) => {
          return (
            <RightCard
              users={value}
              color={value.color}
              id={index}
              key={index}
            />
          );
        })}

        {props.users.map((value, index) => {
          return (
            <RightCard
              users={value}
              color={value.color}
              id={index}
              key={`duplicate-${index}`}
            />
          );
        })}
        
      </div>
    </div>
  );
};

export default RightContent;
