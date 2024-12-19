import React, { useState, useRef, useEffect } from "react";

const VirtualizedList = ({ items, height, rowHeight }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);
  const visibleRowCount = Math.ceil(height / rowHeight);
  const startIndex = Math.floor(scrollTop / rowHeight);
  const endIndex = startIndex + visibleRowCount;

  const handleScroll = () => {
    setScrollTop(containerRef.current.scrollTop);
  };

  return (
    <div
      ref={containerRef}
      style={{ height, overflowY: "auto", position: "relative" }}
      onScroll={handleScroll}
    >
      <div style={{ height: items.length * rowHeight, position: "relative" }}>
        {items.slice(startIndex, endIndex).map((item, index) => (
          <div
            key={startIndex + index}
            style={{
              position: "absolute",
              top: (startIndex + index) * rowHeight,
              height: rowHeight,
              width: "100%",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
  export default VirtualizedList;
