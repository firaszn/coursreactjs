import { useState } from "react";

const ColorBox = ({ initialColor = "#3498db", colorOptions = ["#e74c3c", "#2ecc71", "#f1c40f"] }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    setColor(randomColor);
  };

  return (
    <div>
      <div style={{ width: "100px", height: "100px", backgroundColor: color, margin: "10px" }}></div>
      <button onClick={changeColor}>Changer de couleur</button>
    </div>
  );
};

export default ColorBox;
