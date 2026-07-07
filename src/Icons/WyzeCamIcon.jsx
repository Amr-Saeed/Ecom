const WyzeCamIcon = ({ width = 17.62, height = 21.36 }) => {
  const nativeWidth = 17.62;
  const nativeHeight = 21.36;
  const scaleX = width / nativeWidth;
  const scaleY = height / nativeHeight;

  const wW = 4.61,
    wH = 3.24;
  const yW = 3.01,
    yH = 3.22;
  const zW = 2.93,
    zH = 3.24;
  const dashW = 2.57,
    dashH = 0.56;
  const dashGap = 0.4;
  const wordGap = 0.5;

  const scaled = (val) => val * Math.min(scaleX, scaleY);

  return (
    <div
      className="order-summary__plan-icon"
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url('/cam.png')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: `${scaled(wordGap)}px`,
        }}
      >
        <img
          src="/w.png"
          alt=""
          style={{ width: `${scaled(wW)}px`, height: `${scaled(wH)}px` }}
        />
        <img
          src="/y.png"
          alt=""
          style={{ width: `${scaled(yW)}px`, height: `${scaled(yH)}px` }}
        />
        <img
          src="/z.png"
          alt=""
          style={{ width: `${scaled(zW)}px`, height: `${scaled(zH)}px` }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: `${scaled(dashGap)}px`,
            alignItems: "center",
          }}
        >
          <img
            src="/dash.png"
            alt=""
            style={{
              width: `${scaled(dashW)}px`,
              height: `${scaled(dashH)}px`,
            }}
          />
          <img
            src="/dash.png"
            alt=""
            style={{
              width: `${scaled(dashW)}px`,
              height: `${scaled(dashH)}px`,
            }}
          />
          <img
            src="/dash.png"
            alt=""
            style={{
              width: `${scaled(dashW)}px`,
              height: `${scaled(dashH)}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WyzeCamIcon;
