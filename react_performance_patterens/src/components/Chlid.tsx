const Child = ({ total }) => {
  console.log("Child Rendered");

  return (
    <div>
      <h3>Total: {total}</h3>
    </div>
  );
};

export default Child;