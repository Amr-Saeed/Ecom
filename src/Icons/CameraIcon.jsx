const CameraIcon = ({ size = 26 }) => {
  const containerHeight = 21.13 + 4.33 + 2;
  const containerWidth = 21.13;
  const scale = size / containerWidth;
  return (
    <div
      style={{
        position: "relative",
        width: `${containerWidth * scale}px`,
        height: `${containerHeight * scale}px`,
        display: "inline-block",
      }}
      aria-label="Camera icon"
    >
      <img
        src="/Rectangle 34.png"
        alt="Camera body"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${21.13 * scale}px`,
          height: `${21.13 * scale}px`,
        }}
      />

      <img
        src="/circle.png"
        alt="Lens"
        style={{
          position: "absolute",
          top: `${(21.13 / 2 - 8.13 / 2) * scale}px`,
          left: `${(21.13 / 2 - 8.13 / 2) * scale}px`,
          width: `${8.13 * scale}px`,
          height: `${8.13 * scale}px`,
        }}
      />

      <img
        src="/dot.jpg"
        alt="Indicator"
        style={{
          position: "absolute",
          top: `${(21.13 / 2 + 8.13 / 2 + 2) * scale}px`,
          left: `${(21.13 / 2 - 0.81 / 2) * scale}px`,
          width: `${0.81 * scale}px`,
          height: `${0.81 * scale}px`,
        }}
      />

      <img
        src="/leftLeg.jpg"
        alt="Left leg"
        style={{
          position: "absolute",
          top: `${21.13 * scale}px`,
          left: `${(21.13 / 2 - 4.5) * scale}px`,
          width: `${2 * scale}px`,
          height: `${4.33 * scale}px`,
        }}
      />

      <img
        src="/rightLeg.jpg"
        alt="Right leg"
        style={{
          position: "absolute",
          top: `${21.13 * scale}px`,
          right: `${(21.13 / 2 - 4.5) * scale}px`,
          width: `${2 * scale}px`,
          height: `${4.33 * scale}px`,
        }}
      />

      <img
        src="/base.jpg"
        alt="Base"
        style={{
          position: "absolute",
          top: `${(21.13 + 4.33) * scale}px`,
          left: `${((21.13 - 19.5) / 2) * scale}px`,
          width: `${19.5 * scale}px`,
          height: `${2 * scale}px`,
        }}
      />
    </div>
  );
};

export default CameraIcon;
