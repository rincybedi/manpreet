import React, { forwardRef } from "react";

const Circle = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[40px] w-[40px] rounded-full bg-gray-800 absolute"
    ></div>
  );
});

export default Circle;
