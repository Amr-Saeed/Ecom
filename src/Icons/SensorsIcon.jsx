const SensorsIcon = ({ size = 26, color = "#6F7882" }) => {
  const rectWidth = 11.56;
  const rectHeight = 7.51;
  const wifi1Width = 10.77;
  const wifi1Height = 2.17;
  const wifi2Width = 18.27;
  const wifi2Height = 3.73;
  const wifi3Width = 26;
  const wifi3Height = 5.26;

  const gapAfterRect = 8;
  const gapBetweenWifi = 3;

  const totalWidth = wifi3Width;
  const scale = size / totalWidth;

  const eyeSize = Math.max(2, 0.58) * scale;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: `${size}px`,
      }}
      aria-label="Sensors icon"
    >
      <div
        style={{
          position: "relative",
          width: `${rectWidth * scale}px`,
          height: `${rectHeight * scale}px`,
          backgroundColor: "transparent",
          border: `1px solid ${color}`,
          borderRadius: `${2 * scale}px`,
          overflow: "hidden",
          marginBottom: `${gapAfterRect * scale}px`,
        }}
      >
        <img
          src="/leftEyeplan.png"
          alt=""
          style={{
            position: "absolute",
            top: `${2 * scale}px`,
            left: `${2.5 * scale}px`,
            width: `${eyeSize}px`,
            height: `${eyeSize}px`,
          }}
        />
        x{" "}
        <img
          src="/rightEyeplan.png"
          alt=""
          style={{
            position: "absolute",
            top: `${2 * scale}px`,
            right: `${2.5 * scale}px`,
            width: `${eyeSize}px`,
            height: `${eyeSize}px`,
          }}
        />
      </div>

      <img
        src="/1wifiplan.png"
        alt=""
        style={{
          width: `${wifi1Width * scale}px`,
          height: `${wifi1Height * scale}px`,
          marginBottom: `${gapBetweenWifi * scale}px`,
        }}
      />
      <img
        src="/2wifiplan.png"
        alt=""
        style={{
          width: `${wifi2Width * scale}px`,
          height: `${wifi2Height * scale}px`,
          marginBottom: `${gapBetweenWifi * scale}px`,
        }}
      />
      <img
        src="/3wifiplan.png"
        alt=""
        style={{
          width: `${wifi3Width * scale}px`,
          height: `${wifi3Height * scale}px`,
        }}
      />
    </div>
  );
};

export default SensorsIcon;
