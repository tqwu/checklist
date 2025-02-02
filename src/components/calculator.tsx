import { useState } from "react";

export default function Calculator() {
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    "C",
  ];

  const [input, setInput] = useState("");
  const [window, setWindow] = useState("");

  const handleClick = (button: string) => {
    if (button == "=") calculateResult();
    else if (button == "C") clearInput();
    else handleInput(button);
  };

  const handleInput = (value: string) => {
    const newInput = input + value;
    setInput(newInput);
    setWindow(newInput);
  };

  const clearInput = () => {
    setInput("");
    setWindow("");
  };

  const calculateResult = () => {
    try {
      const computed = eval(input).toString();
      setWindow(computed);
    } catch {
      setWindow("Error");
    }
    setInput("");
  };

  return (
    <div>
      <div className="border-2 p-2">{window}</div>
      <div className="grid grid-cols-4 gap-2 w-36">
        {buttons.map((b) => (
          <button onClick={() => handleClick(b)} key={b}>
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}
