import { clamp } from "./AvatarGenerator";

function Face({ face, faceX, faceY, faceSize }) {
  const size = clamp(face.size, 120, 180);
  const jawWidth = size * 0.9;
  const chinY = faceY + size * 0.4;
  const cheekY = faceY - size * 0.1;

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

      {face.shape === "heart" && (
        <path
          d={`M${faceX} ${faceY - size / 2}
               Q${faceX + size / 2} ${faceY - size / 4}, ${faceX} ${
            faceY + size / 3
          }
               Q${faceX - size / 2} ${faceY - size / 4}, ${faceX} ${
            faceY - size / 2
          }`}
          fill={face.color}
        />
      )}

      {face.shape === "diamond" && (
        <path
          d={`M${faceX} ${faceY - size / 2}
               L${faceX + size / 2} ${faceY}
               L${faceX} ${faceY + size / 2}
               L${faceX - size / 2} ${faceY}Z`}
          fill={face.color}
        />
      )}

      {face.shape === "pear" && (
        <path
          d={`M${faceX} ${faceY - size / 3}
               Q${faceX + size / 3} ${faceY - size / 6}, ${
            faceX + jawWidth / 2
          } ${chinY}
               Q${faceX} ${faceY + size / 2}, ${faceX - jawWidth / 2} ${chinY}
               Q${faceX - size / 3} ${faceY - size / 6}, ${faceX} ${
            faceY - size / 3
          }`}
          fill={face.color}
        />
      )}

      {face.shape === "asymmetric" && (
        <path
          d={`M${faceX} ${faceY - size / 2}
               C${faceX + size / 3} ${faceY - size / 4}, ${
            faceX + size / 2.5
          } ${cheekY}, ${faceX + jawWidth / 2} ${chinY}
               Q${faceX} ${faceY + size / 3}, ${faceX - jawWidth / 2.2} ${chinY}
               C${faceX - size / 3} ${cheekY}, ${faceX - size / 4} ${
            faceY - size / 3
          }, ${faceX} ${faceY - size / 2}`}
          fill={face.color}
        />
      )}

      {face.shape === "hexagon" && (
        <path
          d={`M${faceX} ${faceY - size / 2}
               L${faceX + size / 3} ${faceY - size / 4}
               L${faceX + size / 3} ${faceY + size / 4}
               L${faceX} ${faceY + size / 2}
               L${faceX - size / 3} ${faceY + size / 4}
               L${faceX - size / 3} ${faceY - size / 4}Z`}
          fill={face.color}
        />
      )}

      {face.shape === "rounded-triangle" && (
        <path
          d={`M${faceX} ${faceY - size / 2}
               Q${faceX + size / 2} ${faceY}, ${faceX} ${faceY + size / 2}
               Q${faceX - size / 2} ${faceY}, ${faceX} ${faceY - size / 2}`}
          fill={face.color}
        />
      )}
    </>
  );
}

export default Face;
