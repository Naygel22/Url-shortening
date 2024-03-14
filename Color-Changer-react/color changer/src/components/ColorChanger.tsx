import { useEffect, useState } from "react";

export function ColorChanger() {
  const [currentColor, setCurrentColor] = useState("#808080");

  useEffect(() => {
    document.body.style.backgroundColor = currentColor;
  }, [currentColor]);

  const changeColor = (): void => {
    const maxVal: number = 0xffffff; // 16777215
    let randomNumber: number = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    const hexColor: string = randomNumber.toString(16).toUpperCase().padStart(6, '0');
    setCurrentColor(`#${hexColor}`);
};

  return (
    <>
      <div className="containerBar">
        <div className="containerText">Background Color: </div>
        <div className="colorText" style={{ color: currentColor }}>
          {currentColor}
        </div>
      </div>
      <button className="clickMeButton" onClick={changeColor}>
        Click me!
      </button>
    </>
  );
}