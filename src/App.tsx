import { useRef, useState, useEffect } from "react";
import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import Screenshot from "./shared/Screenshot";
import { DrawingApp } from "./shared/DrawingApp";

import BinanceDark from "./component/BinanceDark/BinanceDark";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const handleCaptureScreenshot = () => {
    Screenshot.handleCaptureScreenshot(divRef);
  };
  const [value, setValue] = useState("bdark");
  const [amount, setAmount] = useState(100);
  const [size, setSize] = useState("small");
  const [
    { cursor, canvasRef, color },
    { startDrawing, draw, endDrawing, ...api },
  ] = DrawingApp();
  const toolbarProps = { color, ...api };
  return (
    <>
      <Header />
      <div className="app__content">
        <Sidebar
          screenshot={handleCaptureScreenshot}
          value={value}
          setvalue={setValue}
          setAmount={setAmount}
          setSize={setSize}
          size={value}
          {...toolbarProps}
        />
        <div className="content" ref={divRef}>
          <div className="app__canvas">
            {value === "completed" ? (
              <canvas
                ref={canvasRef as any}
                width={470}
                height={801}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            ) : value === "green" ? (
              <canvas
                ref={canvasRef as any}
                width={440}
                height={820}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            ) : value === "large" ? (
              <canvas
                ref={canvasRef as any}
                width={671}
                height={820}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            ) : (
              // Default condition if neither "completed" nor "incomplete" is true
              <canvas
                ref={canvasRef as any}
                width={400}
                height={800}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            )}
          </div>
          {value === "bdark" && <BinanceDark amount={amount} />}
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
