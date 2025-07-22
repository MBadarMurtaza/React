import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolsAllowed, setSymbolAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordRef=useRef(null);
  const copyToClipboard = useCallback(() => {
    // select and copy to clipboard
  if (passwordRef.current) {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, Password.length);
    navigator.clipboard.writeText(Password);
  }
}, [Password]);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRESTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string += "0123456789";
    if (symbolsAllowed) string += "~`!@#$%^&*()_+=,./';][\"><?:}{|";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, symbolsAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolsAllowed, setPassword]);
  return (
    <>
      <div className="text-center text-4xl pt-5 mx-auto w-[80%]">
        <h1 className="text-white">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white mt-5">
          <input
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            value={Password}
            type="text"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyToClipboard}
           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 text-2xl">
            Copy
          </button>
        </div>
        <div>
          <div>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white text-2xl pl-5">length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="w-4 h-4"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="text-white text-2xl">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="w-4 h-4"
              onChange={() => {
                setSymbolAllowed((prev) => !prev);
              }}
            />
            <label className="text-white text-2xl">Symbols</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
