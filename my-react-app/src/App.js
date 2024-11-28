import { useRef } from "react";
import "./App.css";
import Circle from "./Circle";

function App() {
  const ref = useRef(null);

  const handleMouseOver = (e) => {
    console.log(e.clientX);
    const refEl = ref.current;
    setTimeout(() =>{
    refEl.style.left = `${e.clientX}px`;
    refEl.style.top = `${e.clientY}px`;
    },200)
  };

  return (
    <div
      onMouseMove={handleMouseOver}
      className="App text-center p-4 text-4xl font-bold mt-2 h-screen relative"
    >
      <Circle ref={ref} />
    </div>
  );
}

export default App;
