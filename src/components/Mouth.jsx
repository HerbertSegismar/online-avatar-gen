import React from "react";

function Mouth({ mouth, faceX, mouthY, mouthSize }) {
  const { type, color } = mouth;
  const width = mouthSize * 1.5;
  const strokeWidth = Math.max(2, mouthSize * 0.15);
  const lipThickness = mouthSize * 0.3;

  // Common mouth path generator
  const createMouthPath = (curveDepth, closePath = false) => {
    const path = `M${faceX - width / 2} ${mouthY} 
                 Q${faceX} ${mouthY + curveDepth}, ${
      faceX + width / 2
    } ${mouthY}`;
    return closePath ? `${path} Z` : path;
  };

  switch (type) {
    case "smile":
      return (
        <g>
          <path
            d={createMouthPath(mouthSize * 0.8, true)}
            fill={color}
            stroke="#000"
            strokeWidth={strokeWidth * 0.8}
          />
          <path
            d={createMouthPath(mouthSize * 0.4)}
            fill="none"
            stroke="#fff"
            strokeWidth={strokeWidth * 0.3}
            strokeLinecap="round"
          />
        </g>
      );

    case "grin":
      return (
        <g>
          <path
            d={`M${faceX - width / 2} ${mouthY - lipThickness / 2}
                 Q${faceX} ${mouthY + mouthSize * 0.6}, ${faceX + width / 2} ${
              mouthY - lipThickness / 2
            }
                 Q${faceX} ${mouthY + mouthSize * 0.3}, ${faceX - width / 2} ${
              mouthY - lipThickness / 2
            }Z`}
            fill={color}
            stroke="#000"
            strokeWidth={strokeWidth * 0.8}
          />
          <rect
            x={faceX - width / 3}
            y={mouthY}
            width={width * 0.66}
            height={mouthSize * 0.2}
            rx={mouthSize * 0.1}
            fill="#000"
          />
        </g>
      );

    case "frown":
      return (
        <g>
          <path
            d={createMouthPath(-mouthSize * 0.6, true)}
            fill={color}
            stroke="#000"
            strokeWidth={strokeWidth}
          />
          <path
            d={createMouthPath(-mouthSize * 0.3)}
            fill="none"
            stroke="#fff"
            strokeWidth={strokeWidth * 0.4}
            strokeLinecap="round"
          />
        </g>
      );

    case "neutral":
      return (
        <g>
          <path
            d={`M${faceX - width / 2} ${mouthY - lipThickness / 2}
                 L${faceX + width / 2} ${mouthY - lipThickness / 2}
                 L${faceX + width / 2} ${mouthY + lipThickness / 2}
                 L${faceX - width / 2} ${mouthY + lipThickness / 2}Z`}
            fill={color}
            stroke="#000"
            strokeWidth={strokeWidth}
          />
        </g>
      );

    case "surprised":
      return (
        <g>
          <circle
            cx={faceX}
            cy={mouthY}
            r={mouthSize / 2}
            fill={color}
            stroke="#000"
            strokeWidth={strokeWidth}
          />
          <ellipse
            cx={faceX}
            cy={mouthY}
            rx={mouthSize / 3}
            ry={mouthSize / 4}
            fill="#000"
          />
        </g>
      );

    case "smirk":
      return (
        <g>
          <path
            d={`M${faceX - width / 2} ${mouthY - lipThickness / 3}
                 Q${faceX - width / 4} ${
              mouthY - lipThickness / 2
            }, ${faceX} ${mouthY}
                 Q${faceX + width / 4} ${mouthY + lipThickness}, ${
              faceX + width / 2
            } ${mouthY + lipThickness / 3}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d={`M${faceX - width / 2} ${mouthY - lipThickness / 3}
                 Q${faceX - width / 4} ${mouthY}, ${faceX} ${
              mouthY + lipThickness / 2
            }
                 Q${faceX + width / 4} ${mouthY + lipThickness * 1.2}, ${
              faceX + width / 2
            } ${mouthY + lipThickness / 3}`}
            fill="none"
            stroke="#000"
            strokeWidth={strokeWidth * 0.8}
          />
        </g>
      );

    case "teeth":
      return (
        <g>
          <path
            d={createMouthPath(mouthSize * 0.6, true)}
            fill={color}
            stroke="#000"
            strokeWidth={strokeWidth}
          />
          {[...Array(6)].map((_, i) => (
            <rect
              key={i}
              x={faceX - width / 2 + (i * width) / 6 + width / 12}
              y={mouthY}
              width={width / 8}
              height={mouthSize * 0.3}
              rx={width / 16}
              fill="#fff"
              stroke="#ccc"
              strokeWidth={strokeWidth * 0.3}
            />
          ))}
        </g>
      );

    case "pout":
      return (
        <g>
          <path
            d={`M${faceX - width / 2} ${mouthY}
                 Q${faceX - width / 4} ${mouthY + lipThickness}, ${faceX} ${
              mouthY + lipThickness
            }
                 Q${faceX + width / 4} ${mouthY + lipThickness}, ${
              faceX + width / 2
            } ${mouthY}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
          />
          <path
            d={`M${faceX - width / 2} ${mouthY}
                 Q${faceX} ${mouthY - lipThickness / 2}, ${
              faceX + width / 2
            } ${mouthY}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth * 0.8}
          />
        </g>
      );

    case "open":
      return (
        <g>
          <path
            d={`M${faceX - width / 2} ${mouthY - lipThickness / 2}
                 Q${faceX} ${mouthY - lipThickness}, ${faceX + width / 2} ${
              mouthY - lipThickness / 2
            }
                 L${faceX + width / 2} ${mouthY + lipThickness / 2}
                 Q${faceX} ${mouthY + lipThickness}, ${faceX - width / 2} ${
              mouthY + lipThickness / 2
            }Z`}
            fill="#f99"
            stroke="#000"
            strokeWidth={strokeWidth}
          />
          <ellipse
            cx={faceX}
            cy={mouthY}
            rx={width / 3}
            ry={lipThickness}
            fill="#000"
          />
        </g>
      );

    default:
      return (
        <path
          d={createMouthPath(mouthSize * 0.5)}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      );
  }
}

export default Mouth;
