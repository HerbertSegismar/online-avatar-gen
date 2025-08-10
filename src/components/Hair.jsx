function Hair({ hair, faceX, hairTop, faceSize, faceTop }) {
  const { style, color, flipped } = hair;
  const flipModifier = flipped ? -1 : 1;
  const hairHeight = faceSize * 0.5;

  // Hair styles with front-layered appearance
  switch (style) {
    case "short":
      return (
        <g>
          {/* Back part of hair (behind face) */}
          <path
            d={`M${faceX - faceSize / 2} ${hairTop}
               Q${faceX} ${hairTop - 10}, ${faceX + faceSize / 2} ${hairTop}
               L${faceX + faceSize / 2} ${faceTop + 5}
               Q${faceX} ${faceTop + 10}, ${faceX - faceSize / 2} ${faceTop + 5}
               Z`}
            fill={color}
            fillOpacity={0.8}
          />
          {/* Front part of hair (over face) */}
          <path
            d={`M${faceX - faceSize / 2} ${hairTop}
               Q${faceX} ${hairTop - 15}, ${faceX + faceSize / 2} ${hairTop}
               L${faceX + faceSize / 2} ${hairTop + hairHeight * 0.3}
               Q${faceX} ${hairTop + hairHeight * 0.4}, ${
              faceX - faceSize / 2
            } ${hairTop + hairHeight * 0.3}
               Z`}
            fill={color}
          />
        </g>
      );

    case "long":
      return (
        <g>
          {/* Back hair */}
          <path
            d={`M${faceX - faceSize / 2} ${hairTop}
               Q${faceX} ${hairTop - 15}, ${faceX + faceSize / 2} ${hairTop}
               L${faceX + faceSize / 2} ${hairTop + hairHeight}
               Q${faceX} ${hairTop + hairHeight * 1.1}, ${
              faceX - faceSize / 2
            } ${hairTop + hairHeight}
               Z`}
            fill={color}
            fillOpacity={0.7}
          />
          {/* Front hair layer */}
          <path
            d={`M${faceX - faceSize / 2} ${hairTop}
               Q${faceX} ${hairTop - 20}, ${faceX + faceSize / 2} ${hairTop}
               L${faceX + faceSize / 2} ${hairTop + hairHeight * 0.7}
               Q${faceX} ${hairTop + hairHeight * 0.8}, ${
              faceX - faceSize / 2
            } ${hairTop + hairHeight * 0.7}
               Z`}
            fill={color}
          />
          {/* Hair strands (always in front) */}
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M${faceX - faceSize / 2 + (i * faceSize) / 7} ${hairTop + 10}
                   Q${faceX - faceSize / 2 + (i * faceSize) / 7 + 5} ${
                hairTop + hairHeight * 0.7
              },
                   ${faceX - faceSize / 2 + (i * faceSize) / 7 - 5} ${
                hairTop + hairHeight
              }`}
              stroke={darkenColor(color, 10)}
              strokeWidth={1.5}
              fill="none"
            />
          ))}
        </g>
      );

    // ... other hair styles with similar front-layered approach
  }
}

// Helper function
function darkenColor(hex, percent) {
  // Implement color darkening logic
  return hex;
}

export default Hair;
