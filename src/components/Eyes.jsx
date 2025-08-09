import React from "react";

function Eyes({ eyes, faceX, eyeY, eyeSize, eyeSpacing }) {
  const { type, color } = eyes;

  return (
    <g>
      <Eye
        type={type}
        color={color}
        x={faceX - eyeSpacing}
        y={eyeY}
        size={eyeSize}
      />
      <Eye
        type={type}
        color={color}
        x={faceX + eyeSpacing}
        y={eyeY}
        size={eyeSize}
      />
    </g>
  );
}

function Eye({ type, color, x, y, size }) {
  switch (type) {
    case "circle":
      return <circle cx={x} cy={y} r={size / 2} fill={color} />;

    case "oval":
      return <ellipse cx={x} cy={y} rx={size / 2} ry={size / 3} fill={color} />;

    case "rectangle":
      return (
        <rect
          x={x - size / 2}
          y={y - size / 4}
          width={size}
          height={size / 2}
          rx="2"
          fill={color}
        />
      );

    case "closed":
      return (
        <line
          x1={x - size / 2}
          y1={y}
          x2={x + size / 2}
          y2={y}
          stroke={color}
          strokeWidth="3"
        />
      );

    default:
      return <circle cx={x} cy={y} r={size / 2} fill={color} />;
  }
}

export default Eyes;
