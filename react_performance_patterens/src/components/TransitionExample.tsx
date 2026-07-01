import React, { useState, useTransition } from "react";

const TransitionExample = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Urgent update
    setInput(value);

    // Non-urgent update
    startTransition(() => {
      const newList = [];

      // Simulate an expensive operation
      for (let i = 0; i < 5000; i++) {
        newList.push(`${value} - Item ${i + 1}`);
      }

      setList(newList);
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useTransition Demo</h2>

      <input
        type="text"
        placeholder="Type here..."
        value={input}
        onChange={handleChange}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
        }}
      />

      {isPending && (
        <p style={{ color: "blue" }}>Loading list...</p>
      )}

      <ul
        style={{
          height: "300px",
          overflowY: "scroll",
          marginTop: "20px",
        }}
      >
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransitionExample;