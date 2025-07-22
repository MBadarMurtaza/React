import React from "react";

function ButtonComponent({ eye, updateColor }) {
  return (
    <>
      <div
        className="bg-[#c5bba4] text-lg text-black w-[100px] h-10 border-2  rounded-lg text-center place-content-center cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300"
        style={{ borderColor: eye, color: eye }}
        onClick={() => updateColor(eye)}
      >
        {eye}
      </div>
    </>
  );
}

export default ButtonComponent;
