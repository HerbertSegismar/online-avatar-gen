function Eyes({ eyes, faceX, eyeY, eyeSize, eyeSpacing }) {
  const { type, color } = eyes;
  const eyeColor = color || "#222"; // Default dark color

  return (
    <g>
      <Eye
        type={type}
        color={eyeColor}
        x={faceX - eyeSpacing}
        y={eyeY}
        size={eyeSize}
        side="left"
      />
      <Eye
        type={type}
        color={eyeColor}
        x={faceX + eyeSpacing}
        y={eyeY}
        size={eyeSize}
        side="right"
      />
    </g>
  );
}

function Eye({ type, color, x, y, size, side }) {
  const baseProps = {
    stroke: "#000",
    strokeWidth: size * 0.1,
    fill: color,
  };

  const irisSize = size * 0.6;
  const pupilSize = size * 0.3;
  const highlightSize = size * 0.15;

  // Direction the eye is looking (subtle variation)
  const lookDirection = side === "left" ? -0.2 : 0.2;
  const irisOffsetX = size * 0.15 * lookDirection;
  const irisOffsetY = size * 0.05;

  switch (type) {
    case "realistic":
      return (
        <g>
          {/* Eye white */}
          <ellipse
            cx={x}
            cy={y}
            rx={size * 0.6}
            ry={size * 0.4}
            fill="#fff"
            stroke="#666"
            strokeWidth={size * 0.05}
          />
          {/* Iris */}
          <circle
            cx={x + irisOffsetX}
            cy={y + irisOffsetY}
            r={irisSize / 2}
            fill={color}
          />
          {/* Pupil */}
          <circle
            cx={x + irisOffsetX}
            cy={y + irisOffsetY}
            r={pupilSize / 2}
            fill="#000"
          />
          {/* Eye shine */}
          <circle
            cx={x + irisOffsetX + irisSize * 0.2}
            cy={y + irisOffsetY - irisSize * 0.2}
            r={highlightSize / 2}
            fill="#fff"
            opacity="0.8"
          />
          {/* Eyelid */}
          <path
            d={`M${x - size * 0.6} ${y - size * 0.25}
                 Q${x} ${y - size * 0.3} ${x + size * 0.6} ${y - size * 0.25}`}
            stroke="#333"
            strokeWidth={size * 0.08}
            fill="none"
          />
        </g>
      );

    case "anime":
      return (
        <g>
          <circle
            cx={x}
            cy={y}
            r={size / 2}
            fill="#fff"
            stroke="#333"
            strokeWidth={size * 0.05}
          />
          <circle
            cx={x + irisOffsetX * 1.5}
            cy={y + irisOffsetY}
            r={irisSize / 2}
            fill={color}
          />
          <circle
            cx={x + irisOffsetX * 1.5 + irisSize * 0.1}
            cy={y + irisOffsetY - irisSize * 0.1}
            r={pupilSize / 2}
            fill="#000"
          />
          <circle
            cx={x + irisOffsetX * 1.5 + irisSize * 0.25}
            cy={y + irisOffsetY - irisSize * 0.25}
            r={highlightSize / 1.5}
            fill="#fff"
          />
          {/* Top eyelash */}
          <path
            d={`M${x - size * 0.5} ${y - size * 0.4}
                 Q${x} ${y - size * 0.5} ${x + size * 0.5} ${y - size * 0.4}`}
            stroke="#000"
            strokeWidth={size * 0.1}
            fill="none"
          />
        </g>
      );

    case "sleepy":
      return (
        <g>
          <path
            d={`M${x - size / 2} ${y}
                 Q${x} ${y + size / 3} ${x + size / 2} ${y}`}
            stroke="#333"
            strokeWidth={size * 0.15}
            fill="none"
          />
          <path
            d={`M${x - size / 3} ${y}
                 Q${x} ${y + size / 4} ${x + size / 3} ${y}`}
            stroke="#666"
            strokeWidth={size * 0.1}
            fill="none"
          />
        </g>
      );

    case "sparkle":
      return (
        <g>
          <circle
            cx={x}
            cy={y}
            r={size / 2}
            fill="#fff"
            stroke="#333"
            strokeWidth={size * 0.05}
          />
          {/* Sparkle lines */}
          {[0, 45, 90, 135].map((angle) => (
            <line
              key={angle}
              x1={x}
              y1={y}
              x2={x + (Math.cos((angle * Math.PI) / 180) * size) / 2}
              y2={y + (Math.sin((angle * Math.PI) / 180) * size) / 2}
              stroke={color}
              strokeWidth={size * 0.08}
              strokeLinecap="round"
            />
          ))}
        </g>
      );

    case "circle":
      return (
        <g>
          <circle cx={x} cy={y} r={size / 2} {...baseProps} />
          <circle cx={x} cy={y} r={size / 4} fill="#000" />
        </g>
      );

    case "oval":
      return (
        <g>
          <ellipse cx={x} cy={y} rx={size / 2} ry={size / 3} {...baseProps} />
          <ellipse cx={x} cy={y} rx={size / 4} ry={size / 6} fill="#000" />
        </g>
      );

    case "rectangle":
      return (
        <g>
          <rect
            x={x - size / 2}
            y={y - size / 4}
            width={size}
            height={size / 2}
            rx="2"
            {...baseProps}
          />
          <rect
            x={x - size / 4}
            y={y - size / 8}
            width={size / 2}
            height={size / 4}
            rx="1"
            fill="#000"
          />
        </g>
      );

    case "closed":
      return (
        <g>
          <path
            d={`M${x - size / 2} ${y}
                 Q${x} ${y + size / 3} ${x + size / 2} ${y}`}
            stroke="#333"
            strokeWidth={size * 0.15}
            fill="none"
          />
          <path
            d={`M${x - size / 3} ${y}
                 Q${x} ${y + size / 5} ${x + size / 3} ${y}`}
            stroke="#666"
            strokeWidth={size * 0.08}
            fill="none"
          />
        </g>
      );

    default:
      return (
        <g>
          <circle cx={x} cy={y} r={size / 2} {...baseProps} />
          <circle cx={x} cy={y} r={size / 4} fill="#000" />
        </g>
      );
  }
}

export default Eyes;
