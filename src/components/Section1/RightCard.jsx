import React from "react";
import RightCardImage from "./RightCardImage";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {        
  return (
    <div className="h-full brightness-99 shrink-0 overflow-hidden w-80 relative rounded-4xl">
      <RightCardImage users={props.users}/>
      <RightCardContent users={props.users} color={props.users.color} id={props.id}/>
    </div>
  );
};

export default RightCard;
