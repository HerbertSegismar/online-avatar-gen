
function Accessories({
  accessories,
  faceX,
  faceY,
  faceSize,
  eyeSpacing,
  eyeY,
}) {
  const {
    beard,
    mustache,
    nose,
    ears,
    eyeglasses,
    eyeglassesStyle,
    eyeglassesColor,
    eyeglassesOpacity,
    eyeglassesShape,
    color: accessoriesColor,
  } = accessories;

  const noseWidth = faceSize * 0.15;
  const noseHeight = faceSize * 0.2;
  const skinColor = accessoriesColor || "#F5CBA7";

  const renderEyeglasses = () => {
    if (!eyeglasses) return null;

    // Size parameters
    const lensWidth = faceSize * 0.25;
    const lensHeight = faceSize * 0.15;
    const glassesY = eyeY - faceSize * 0.02;
    const lensSpacing = eyeSpacing;

    // Color and style definitions
    const glassesColors = [
    "#FF5252",
    "#FF4081",
    "#E040FB",
    "#7C4DFF",
    "#536DFE",
    "#448AFF",
    "#40C4FF",
    "#18FFFF",
    "#64FFDA",
    "#69F0AE",
    "#B2FF59",
    "#EEFF41",
    "#FFFF00",
    "#FFD740",
    "#FFAB40",
    "#FF6E40",
    "#FF5252",
    "#F8BBD0",
    "#E1BEE7",
    "#D1C4E9",
  ];
    const color =
      eyeglassesColor ||
      glassesColors[Math.floor(Math.random() * glassesColors.length)];
    const style =
      eyeglassesStyle ||
      (Math.random() > 0.66
        ? "full"
        : Math.random() > 0.5
        ? "sunglasses"
        : "regular");

    // Lens shape options
    const lensShapes = [
      "round",
      "rectangle",
      "oval",
      "cat-eye",
      "aviator",
      "hexagon",
      "octagon",
      "rounded-square",
    ];
    const shape =
      eyeglassesShape ||
      lensShapes[Math.floor(Math.random() * lensShapes.length)];

    // Calculate lens centers
    const leftLensCenterX = faceX - lensSpacing;
    const rightLensCenterX = faceX + lensSpacing;

    // Render different lens shapes
    const renderLens = (centerX, centerY) => {
      const baseProps = {
        fill: style === "sunglasses" ? color : "none",
        stroke: color,
        strokeWidth: "4",
        strokeLinecap: "round",
        opacity: style === "sunglasses" ? eyeglassesOpacity || 0.4 : 0.8,
      };

      switch (shape) {
        case "rectangle":
          return (
            <rect
              x={centerX - lensWidth / 2}
              y={centerY - lensHeight / 2}
              width={lensWidth}
              height={lensHeight}
              rx="5"
              {...baseProps}
            />
          );
        case "cat-eye":
          return (
            <path
              d={`M${centerX - lensWidth / 2} ${centerY - lensHeight / 4}
                 Q${centerX - lensWidth / 4} ${centerY - lensHeight / 2}, 
                 ${centerX} ${centerY - lensHeight / 4}
                 Q${centerX + lensWidth / 4} ${centerY}, 
                 ${centerX + lensWidth / 2} ${centerY - lensHeight / 4}
                 L${centerX + lensWidth / 2} ${centerY + lensHeight / 2}
                 Q${centerX} ${centerY + lensHeight / 1.5}, 
                 ${centerX - lensWidth / 2} ${centerY + lensHeight / 2} Z`}
              {...baseProps}
            />
          );
        case "aviator":
          return (
            <path
              d={`M${centerX - lensWidth / 2} ${centerY}
                 Q${centerX - lensWidth / 4} ${centerY - lensHeight / 2}, 
                 ${centerX} ${centerY - lensHeight / 3}
                 Q${centerX + lensWidth / 4} ${centerY - lensHeight / 2}, 
                 ${centerX + lensWidth / 2} ${centerY}
                 Q${centerX + lensWidth / 4} ${centerY + lensHeight / 2}, 
                 ${centerX} ${centerY + lensHeight / 3}
                 Q${centerX - lensWidth / 4} ${centerY + lensHeight / 2}, 
                 ${centerX - lensWidth / 2} ${centerY} Z`}
              {...baseProps}
            />
          );
        case "hexagon":
          return (
            <path
              d={`M${centerX - lensWidth / 2} ${centerY - lensHeight / 3}
                 L${centerX - lensWidth / 4} ${centerY - lensHeight / 2}
                 L${centerX + lensWidth / 4} ${centerY - lensHeight / 2}
                 L${centerX + lensWidth / 2} ${centerY - lensHeight / 3}
                 L${centerX + lensWidth / 2} ${centerY + lensHeight / 3}
                 L${centerX + lensWidth / 4} ${centerY + lensHeight / 2}
                 L${centerX - lensWidth / 4} ${centerY + lensHeight / 2}
                 L${centerX - lensWidth / 2} ${centerY + lensHeight / 3} Z`}
              {...baseProps}
            />
          );
        default: // round (default)
          return (
            <ellipse
              opacity={0.1}
              cx={centerX}
              cy={centerY}
              rx={lensWidth / 2}
              ry={lensHeight / 2}
              {...baseProps}
            />
          );
      }
    };

    return (
      <g>
        {/* Left lens */}
        {renderLens(leftLensCenterX, glassesY)}

        {/* Right lens */}
        {renderLens(rightLensCenterX, glassesY)}

        {/* Bridge - shape varies based on lens type */}
        {shape === "aviator" ? (
          <circle
            cx={faceX}
            cy={glassesY}
            r="5"
            fill={color}
            stroke={color}
            strokeWidth="2"
            opacity={0.1}
          />
        ) : (
          <line
            x1={leftLensCenterX + lensWidth / 2.5}
            y1={glassesY}
            x2={rightLensCenterX - lensWidth / 2.5}
            y2={glassesY}
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
        )}

        {/* Side arms */}
        {style === "full" && (
          <>
            <path
              d={`M${leftLensCenterX - lensWidth / 2} ${glassesY}
                 L${leftLensCenterX - lensWidth / 2 - 30} ${glassesY + 5}
                 L${leftLensCenterX - lensWidth / 2 - 40} ${glassesY + 20}`}
              stroke={color}
              strokeWidth="4"
              fill="none"
            />
            <path
              d={`M${rightLensCenterX + lensWidth / 2} ${glassesY}
                 L${rightLensCenterX + lensWidth / 2 + 30} ${glassesY + 5}
                 L${rightLensCenterX + lensWidth / 2 + 40} ${glassesY + 20}`}
              stroke={color}
              strokeWidth="4"
              fill="none"
            />
          </>
        )}

        {/* Sunglasses tint */}
        {style === "sunglasses" && (
          <defs>
            <radialGradient
              id="sunglassesTint"
              cx="50%"
              cy="50%"
              r="50%"
              fx="30%"
              fy="30%"
            >
              <stop offset="0%" stopColor={color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0.1" />
            </radialGradient>
          </defs>
        )}
      </g>
    );
  };
  return (
    <>
      {/* Render eyeglasses with 30% chance */}
      {Math.random() > 0.1 && renderEyeglasses()}

      {/* Rest of your accessories components... */}
      {ears && (
        <>
          <path
            d={`M${faceX - eyeSpacing * 1.2} ${faceY - faceSize * 0.1}
                 Q${faceX - eyeSpacing * 1.3} ${faceY}, 
                 ${faceX - eyeSpacing * 1.2} ${faceY + faceSize * 0.15}
                 Q${faceX - eyeSpacing * 0.9} ${faceY + faceSize * 0.1},
                 ${faceX - eyeSpacing * 0.8} ${faceY - faceSize * 0.05}
                 Q${faceX - eyeSpacing} ${faceY - faceSize * 0.15},
                 ${faceX - eyeSpacing * 1.2} ${faceY - faceSize * 0.1}`}
            fill={skinColor}
            stroke="#000"
            strokeWidth="0.5"
          />
          <path
            d={`M${faceX + eyeSpacing * 1.2} ${faceY - faceSize * 0.1}
                 Q${faceX + eyeSpacing * 1.3} ${faceY}, 
                 ${faceX + eyeSpacing * 1.2} ${faceY + faceSize * 0.15}
                 Q${faceX + eyeSpacing * 0.9} ${faceY + faceSize * 0.1},
                 ${faceX + eyeSpacing * 0.8} ${faceY - faceSize * 0.05}
                 Q${faceX + eyeSpacing} ${faceY - faceSize * 0.15},
                 ${faceX + eyeSpacing * 1.2} ${faceY - faceSize * 0.1}`}
            fill={skinColor}
            stroke="#000"
            strokeWidth="0.5"
          />
        </>
      )}

      {nose && (
        <path
          d={`M${faceX} ${faceY - faceSize * 0.15}
               C${faceX + noseWidth * 0.4} ${faceY}, 
               ${faceX + noseWidth * 0.3} ${faceY + noseHeight}, 
               ${faceX} ${faceY + noseHeight * 0.8}
               C${faceX - noseWidth * 0.3} ${faceY + noseHeight}, 
               ${faceX - noseWidth * 0.4} ${faceY}, 
               ${faceX} ${faceY - faceSize * 0.15}`}
          fill={skinColor}
          stroke="#000"
          strokeWidth="0.5"
        />
      )}

      {mustache && (
        <path
          d={`M${faceX - faceSize * 0.25} ${faceY + faceSize * 0.15}
               Q${faceX - faceSize * 0.1} ${faceY + faceSize * 0.22}, 
               ${faceX} ${faceY + faceSize * 0.2}
               Q${faceX + faceSize * 0.1} ${faceY + faceSize * 0.22}, 
               ${faceX + faceSize * 0.25} ${faceY + faceSize * 0.15}
               Q${faceX + faceSize * 0.15} ${faceY + faceSize * 0.25}, 
               ${faceX} ${faceY + faceSize * 0.23}
               Q${faceX - faceSize * 0.15} ${faceY + faceSize * 0.25}, 
               ${faceX - faceSize * 0.25} ${faceY + faceSize * 0.15}`}
          fill={accessoriesColor || "#333"}
        />
      )}

      {beard && (
        <path
          d={`M${faceX - faceSize * 0.35} ${faceY + faceSize * 0.15}
               Q${faceX - faceSize * 0.2} ${faceY + faceSize * 0.4}, 
               ${faceX} ${faceY + faceSize * 0.45}
               Q${faceX + faceSize * 0.2} ${faceY + faceSize * 0.4}, 
               ${faceX + faceSize * 0.35} ${faceY + faceSize * 0.15}
               Q${faceX + faceSize * 0.25} ${faceY + faceSize * 0.5}, 
               ${faceX} ${faceY + faceSize * 0.55}
               Q${faceX - faceSize * 0.25} ${faceY + faceSize * 0.5}, 
               ${faceX - faceSize * 0.35} ${faceY + faceSize * 0.15}`}
          fill={accessoriesColor || "#333"}
        />
      )}
    </>
  );
}

export default Accessories;
