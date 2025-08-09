
function Accessories({
  accessories,
  faceX,
  faceY,
  faceSize,
  eyeY,
  eyeSpacing,
  padding,
}) {
  const { glasses, hat, beard, color } = accessories;
  const topPadding = padding / 2;

  return (
    <>
      {glasses && (
        <Glasses x={faceX} y={eyeY} spacing={eyeSpacing} color={color} />
      )}

      {hat && (
        <Hat
          x={faceX}
          y={faceY - faceSize / 2}
          size={faceSize}
          color={color}
          padding={topPadding}
        />
      )}

      {beard && (
        <Beard x={faceX} y={faceY + 30} size={faceSize} color={color} />
      )}
    </>
  );
}

function Glasses({ x, y, spacing, color }) {
  return (
    <g>
      <rect
        x={x - spacing - 15}
        y={y - 8}
        width={30}
        height={15}
        rx="5"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <rect
        x={x + spacing - 15}
        y={y - 8}
        width={30}
        height={15}
        rx="5"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <line
        x1={x - spacing + 15}
        y1={y}
        x2={x + spacing - 15}
        y2={y}
        stroke={color}
        strokeWidth="2"
      />
    </g>
  );
}

function Hat({ x, y, size, color, padding }) {
  return (
    <g>
      <rect
        x={x - size / 1.5}
        y={y - 20 - padding}
        width={size * 1.3}
        height={10}
        rx="5"
        fill={color}
      />
      <rect
        x={x - size / 2.5}
        y={y - 50 - padding}
        width={size * 0.8}
        height={30}
        rx="10"
        fill={color}
      />
    </g>
  );
}

function Beard({ x, y, size, color }) {
  return (
    <g>
      <path
        d={`M${x - size /3.4} ${y} 
             Q${x} ${y + size / 5}, ${x + size / 3} ${y}`}
        fill={"none"}
        stroke={color}
        strokeWidth="3"
      />
      <path
        d={`M${x - size / 4} ${y + 5} 
             Q${x - size / 9} ${y + size / 4}, ${x} ${y + size / 9}
             Q${x + size / 7} ${y + size / 4}, ${x + size / 3.5} ${y +4}`}
        fill={color}
        stroke={color}
        strokeWidth="3"
      />
    </g>
  );
}

export default Accessories;
