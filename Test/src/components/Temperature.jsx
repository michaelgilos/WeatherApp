const Temperature = ({ temp }) => {
  return (
    <h2>
      Temperature:
      <span style={{ color: "red" }}>{temp}°C</span>
    </h2>
  );
};

export default Temperature;
