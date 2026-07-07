const ProtectionIcon = ({ size = 26 }) => {
  const triangleWidth = 6.96;
  const triangleHeight = 3.48;

  const dotWidth = 4.06;
  const dotHeight = 3.04;
  const gridGap = 2;

  const gridColumns = 3;
  const gridRows = 3;
  const gridWidth = gridColumns * dotWidth + (gridColumns - 1) * gridGap;
  const gridHeight = gridRows * dotHeight + (gridRows - 1) * gridGap;

  const totalWidth = Math.max(triangleWidth, gridWidth);
  const totalHeight = triangleHeight + gridGap + gridHeight;

  const scale = size / totalWidth;

  return (
    <div
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${totalHeight * scale}px`,
        display: "inline-block",
      }}
      aria-label="Protection icon"
    >
      <img
        src="/triangle.jpg"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: `${((totalWidth - triangleWidth) / 2) * scale}px`,
          width: `${triangleWidth * scale}px`,
          height: `${triangleHeight * scale}px`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: `${(triangleHeight + gridGap) * scale}px`,
          left: `${((totalWidth - gridWidth) / 2) * scale}px`,
          width: `${gridWidth * scale}px`,
          height: `${gridHeight * scale}px`,
        }}
      >
        {Array.from({ length: gridRows }).map((_, row) => (
          <div
            key={row}
            style={{
              display: "flex",
              gap: `${gridGap * scale}px`,
              marginBottom: row < gridRows - 1 ? `${gridGap * scale}px` : 0,
            }}
          >
            {Array.from({ length: gridColumns }).map((_, col) => (
              <img
                key={col}
                src="/gridDot.jpg"
                alt=""
                style={{
                  width: `${dotWidth * scale}px`,
                  height: `${dotHeight * scale}px`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtectionIcon;
