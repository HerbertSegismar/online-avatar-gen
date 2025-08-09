import React from "react";
import { clamp } from "./AvatarGenerator";

function Face({ face, faceX, faceY, faceSize }) {
  const size = clamp(face.size, 120, 180);

  return (
    <>
      {face.shape === "circle" && (
        <circle cx={faceX} cy={faceY} r={size / 2} fill={face.color} />
      )}
      {face.shape === "oval" && (
        <ellipse
          cx={faceX}
          cy={faceY}
          rx={size / 2}
          ry={size / 2.5}
          fill={face.color}
        />
      )}
      {face.shape === "square" && (
        <rect
          x={faceX - size / 2}
          y={faceY - size / 2}
          width={size}
          height={size}
          fill={face.color}
        />
      )}
      {face.shape === "rounded-square" && (
        <rect
          x={faceX - size / 2}
          y={faceY - size / 2}
          rx={15}
          ry={15}
          width={size}
          height={size}
          fill={face.color}
        />
      )}
    </>
  );
}

export default Face;
