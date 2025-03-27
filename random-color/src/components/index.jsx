import { useState } from "react";

function RandomColor() {
  const [currType, setType] = useState("hex");
  const [currColor, setCurrColor] = useState("#ffffff");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHex() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setCurrColor(hexColor);
  }
  function handleRGB() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setCurrColor(`rgb(${r},${g}, ${b})`);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: currColor,
      }}
    >
      <button onClick={() => (currType === "hex" ? handleHex() : handleRGB())}>
        Generate random color
      </button>
      <button onClick={() => setType("hex")}>create HEX</button>
      <button onClick={() => setType("rgb")}>Create RGB</button>
      <div>
        <h1>{currType === "hex" ? "HEX" : "rgb"}</h1>
        <h1>{currColor}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
