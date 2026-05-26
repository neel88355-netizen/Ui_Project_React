import React from "react";

const RightCardImage = (props) => {    
  return (
      <img
        className="h-full w-full object-cover"
        src={props.users.image}
        alt=""
      />
  );
};

export default RightCardImage;
