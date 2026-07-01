// import { FixedSizeList } from "react-window";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

function Row({ index, style }) {
  console.log("Rendering:", index);

  return (
    <div
      style={{
        ...style,
        borderBottom: "1px solid #ddd",
        padding: "10px",
      }}
    >
      {items[index]}
    </div>
  );
}