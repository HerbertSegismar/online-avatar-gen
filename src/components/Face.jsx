import { clamp } from "./AvatarGenerator";

function Face({ face, faceX, faceY, faceSize }) {

const {
  shape,
  color,
  stripes,
  stripeColor,
  stripeCount,
  stripeWidth,
  stripeRotation,
} = face;  const faceTop = faceY - faceSize / 2;
  const faceHeight = faceSize;

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
      <g>
        {/* Base face shape */}
        {renderFaceShape(shape, faceX, faceY, faceSize, color)}

        {/* Stripes */}
        {stripes && (
          <g clipPath={`url(#face-clip-${shape})`}>
            <g transform={`rotate(${stripeRotation} ${faceX} ${faceY})`}>
              {Array.from({ length: stripeCount }).map((_, i) => {
                const spacing = faceSize / (stripeCount + 1);
                const offset = (i - (stripeCount - 1) / 2) * spacing;
                return (
                  <rect
                    key={i}
                    x={faceX - faceSize}
                    y={faceY + offset - stripeWidth / 2}
                    width={faceSize * 2}
                    height={stripeWidth}
                    fill={stripeColor}
                    opacity={0.7}
                    rx={stripeWidth / 2}
                  />
                );
              })}
            </g>
          </g>
        )}
        {/* Clip path matching face shape */}
        <defs>
          <clipPath id={`face-clip-${shape}`}>
            {renderFaceShape(shape, faceX, faceY, faceSize, "black")}
          </clipPath>
        </defs>
      </g>
    </>
  );
}

function renderFaceShape(shape, x, y, size, color) {
  switch (shape) {
    case "circle":
      return <circle cx={x} cy={y} r={size / 2} fill={color} />;
    case "square":
      return (
        <rect
          x={x - size / 2}
          y={y - size / 2}
          width={size}
          height={size}
          fill={color}
        />
      );
    // ... other shape cases ...
    default:
      return <circle cx={x} cy={y} r={size / 2} fill={color} />;
  }
}

export default Face;
