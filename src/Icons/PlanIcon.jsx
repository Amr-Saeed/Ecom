const PlanIcon = ({ size = 26 }) => {
  const frontWidth = 19.06;
  const frontHeight = 23.36;
  const scale = size / frontWidth;

  const shadowOffset = 2;

  return (
    <div
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${frontHeight * scale}px`,
        display: "inline-block",
      }}
      aria-label="Plan icon"
    >
      <img
        src="/dsd.png"
        alt=""
        style={{
          position: "absolute",
          top: `${shadowOffset * scale}px`,
          left: `${shadowOffset * scale}px`,
          width: `${frontWidth * scale}px`,
          height: `${frontHeight * scale}px`,
          zIndex: 1,
        }}
      />
      <img
        src="/front.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${frontWidth * scale}px`,
          height: `${frontHeight * scale}px`,
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default PlanIcon;
