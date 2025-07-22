import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

function App() {
  const [color, setColor] = useState("Brown");
  return (
    <>
      <div className="h-screen w-full" style={{ backgroundColor: color }}>
        <h1 className="text-center pt-10 text-[gold] text-4xl">
          Color of Back Ground is now {color}!
        </h1>
        <div className="bg-[#c5bba4] w-[80%] h-20 place-self-center absolute bottom-20 rounded-3xl p-5 flex justify-between">
          <ButtonComponent eye="Black" updateColor={setColor} />
          <ButtonComponent eye="Green" updateColor={setColor} />
          <ButtonComponent eye="Orange" updateColor={setColor} />
          <ButtonComponent eye="Brown" updateColor={setColor} />
          <ButtonComponent eye="White" updateColor={setColor} />
          <ButtonComponent eye="Olive" updateColor={setColor} />
          <ButtonComponent eye="Blue" updateColor={setColor} />
          <ButtonComponent eye="Red" updateColor={setColor} />
          <ButtonComponent eye="Indigo" updateColor={setColor} />
        </div>
      </div>
    </>
  );
}

export default App;
