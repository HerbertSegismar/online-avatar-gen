import React from "react";

function Hair({ hair, faceX, faceY, faceSize, padding }) {
  const { style, color, flipped } = hair;
  const flipModifier = flipped ? -1 : 1;
  const topPadding = padding / 2;

  switch (style) {
    case "short":
      return (
        <rect
          x={faceX - faceSize / 2}
          y={faceY - faceSize / 2 - 15 - topPadding}
          width={faceSize}
          height={20}
          fill={color}
          rx="5"
        />
      );

    case "long":
      return (
        <g>
          <rect
            x={faceX - faceSize / 2}
            y={faceY - faceSize / 2 - 15 - topPadding}
            width={faceSize}
            height={20}
            fill={color}
            rx="5"
          />
          <path
            d={`M${faceX - faceSize / 4} ${
              faceY - faceSize / 2 + 5 - topPadding
            } 
                 Q${faceX - (faceSize / 6) * flipModifier} ${
              faceY - faceSize / 4
            }, 
                 ${faceX} ${faceY - faceSize / 4}
                 Q${faceX + (faceSize / 6) * flipModifier} ${
              faceY - faceSize / 4
            }, 
                 ${faceX + faceSize / 4} ${
              faceY - faceSize / 2 + 5 - topPadding
            }`}
            fill={color}
          />
        </g>
      );

    case "curly":
      return (
        <g>
          <ellipse
            cx={faceX}
            cy={faceY - faceSize / 2 - 10 - topPadding}
            rx={faceSize / 2}
            ry={15}
            fill={color}
          />
          {[0, 1, 2].map((i) => (
            <ellipse
              key={i}
              cx={faceX - faceSize / 4 + (i * faceSize) / 4}
              cy={faceY - faceSize / 2 - 25 - topPadding}
              rx={faceSize / 8}
              ry={faceSize / 10}
              fill={color}
            />
          ))}
        </g>
      );

    case "spiky":
      return (
        <g>
          {[...Array(7)].map((_, i) => {
            const x = faceX - faceSize / 2 + (i * faceSize) / 6;
            return (
              <path
                key={i}
                d={`M${x} ${faceY - faceSize / 2 - topPadding} 
                     L${x + faceSize / 12} ${
                  faceY - faceSize / 2 - 20 - topPadding
                } 
                     L${x + faceSize / 6} ${faceY - faceSize / 2 - topPadding}`}
                fill={color}
              />
            );
          })}
        </g>
      );

    default:
      return null;
  }
}

export default Hair;
