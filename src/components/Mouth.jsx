import React from "react";

function Mouth({ mouth, faceX, mouthY, mouthSize }) {
  const { type, color } = mouth;
  const width = mouthSize * 1.5;

  switch (type) {
    case "smile":
      return (
        <path
          d={`M${faceX - width / 2} ${mouthY} 
               Q${faceX} ${mouthY + mouthSize}, ${faceX + width / 2} ${mouthY}`}
          fill="none"
          stroke={color}
          strokeWidth="3"
        />
      );

    case "frown":
      return (
        <path
          d={`M${faceX - width / 2} ${mouthY} 
               Q${faceX} ${mouthY - mouthSize}, ${faceX + width / 2} ${mouthY}`}
          fill="none"
          stroke={color}
          strokeWidth="3"
        />
      );

    case "neutral":
      return (
        <line
          x1={faceX - width / 2}
          y1={mouthY}
          x2={faceX + width / 2}
          y2={mouthY}
          stroke={color}
          strokeWidth="3"
        />
      );

    case "surprised":
      return <circle cx={faceX} cy={mouthY} r={mouthSize / 2} fill={color} />;

    default:
      return (
        <line
          x1={faceX - width / 2}
          y1={mouthY}
          x2={faceX + width / 2}
          y2={mouthY}
          stroke={color}
          strokeWidth="3"
        />
      );
  }
}

export default Mouth;
