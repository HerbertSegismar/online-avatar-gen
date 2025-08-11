function Hair({ hair, faceX, faceY, faceSize, padding }) {
  const { style, color, flipped } = hair;
  const flipModifier = flipped ? -1 : 1;
  const topPadding = padding / 2;

  // Calculate base hair position - initialized here
  const hairBaseY = faceY - faceSize * 0.55; // Sits properly on head
  const hairHeight = faceSize * 0.4;

  switch (style) {
    case "short":
      return (
        <path
          d={`M${faceX - faceSize / 2} ${hairBaseY + 15}
               Q${faceX - faceSize / 4} ${hairBaseY - 5}, ${faceX} ${hairBaseY}
               Q${faceX + faceSize / 4} ${hairBaseY - 5}, ${
            faceX + faceSize / 2
          } ${hairBaseY + 15}
               L${faceX + faceSize / 2} ${hairBaseY + hairHeight}
               Q${faceX + faceSize / 4} ${
            hairBaseY + hairHeight + 5
          }, ${faceX} ${hairBaseY + hairHeight + 5}
               Q${faceX - faceSize / 4} ${hairBaseY + hairHeight + 5}, ${
            faceX - faceSize / 2
          } ${hairBaseY + hairHeight}
               Z`}
          fill={color}
        />
      );

    case "long":
      return (
        <g>
          <path
            d={`M${faceX - faceSize / 2} ${hairBaseY + 10}
                 Q${faceX - faceSize / 3} ${hairBaseY - 10}, ${faceX} ${
              hairBaseY - 15
            }
                 Q${faceX + faceSize / 3} ${hairBaseY - 10}, ${
              faceX + faceSize / 2
            } ${hairBaseY + 10}
                 L${faceX + faceSize / 2} ${hairBaseY + hairHeight * 1.5}
                 Q${faceX + faceSize / 4} ${
              hairBaseY + hairHeight * 1.8
            }, ${faceX} ${hairBaseY + hairHeight * 1.8}
                 Q${faceX - faceSize / 4} ${hairBaseY + hairHeight * 1.8}, ${
              faceX - faceSize / 2
            } ${hairBaseY + hairHeight * 1.5}
                 Z`}
            fill={color}
          />
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M${faceX - faceSize / 2 + (i * faceSize) / 7} ${
                hairBaseY + 10
              }
                   Q${faceX - faceSize / 2 + (i * faceSize) / 7 + 5} ${
                hairBaseY + hairHeight * 1.5
              },
                   ${faceX - faceSize / 2 + (i * faceSize) / 7 - 5} ${
                hairBaseY + hairHeight * 2
              }`}
              stroke={darkenColor(color, 10)}
              strokeWidth={1.5}
              fill="none"
            />
          ))}
        </g>
      );

    case "curly":
      return (
        <g>
          <ellipse
            cx={faceX}
            cy={hairBaseY - 10}
            rx={faceSize / 2}
            ry={15}
            fill={color}
          />
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x = faceX + Math.cos(angle) * (faceSize / 3);
            const y = hairBaseY - 15 + Math.sin(angle) * 15;
            const curlSize = 8 + Math.random() * 5;
            return (
              <path
                key={i}
                d={`M${x} ${y}
                     C${x + curlSize} ${y - curlSize}, 
                     ${x + curlSize} ${y + curlSize}, 
                     ${x} ${y + curlSize * 1.5}
                     C${x - curlSize} ${y + curlSize}, 
                     ${x - curlSize} ${y - curlSize}, 
                     ${x} ${y}`}
                fill={i % 2 === 0 ? color : lightenColor(color, 10)}
              />
            );
          })}
        </g>
      );

    case "spiky":
      const spikeCount = 16;
      return (
        <g>
          {/* Base shape */}
          <path
            d={`M${faceX - faceSize / 2} ${hairBaseY}
                 Q${faceX} ${hairBaseY - faceSize * 0.1}, 
                 ${faceX + faceSize / 2} ${hairBaseY}
                 L${faceX + faceSize / 2} ${hairBaseY + faceSize * 0.05}
                 Q${faceX} ${hairBaseY + faceSize * 0.08}, 
                 ${faceX - faceSize / 2} ${hairBaseY + faceSize * 0.05}
                 Z`}
            fill={color}
          />

          {/* Spikes */}
          {Array.from({ length: spikeCount }).map((_, i) => {
            const x = faceX - faceSize / 2 + (i * faceSize) / (spikeCount - 1);
            const spikeHeight = faceSize * 0.3 + Math.random() * faceSize * 0.2;
            const spikeWidth =
              faceSize * 0.08 + Math.random() * faceSize * 0.05;
            const curve = faceSize * 0.05;

            return (
              <path
                key={i}
                d={`M${x} ${hairBaseY}
                     Q${x + spikeWidth / 2} ${
                  hairBaseY - spikeHeight / 2 + curve
                }, 
                     ${x + spikeWidth} ${hairBaseY - spikeHeight}
                     Q${x + spikeWidth / 2} ${hairBaseY - spikeHeight - curve}, 
                     ${x} ${hairBaseY - spikeHeight}`}
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

// Helper functions (define these or import them)
function darkenColor(hex, percent) {
  // Implementation here
  return hex;
}

function lightenColor(hex, percent) {
  // Implementation here
  return hex;
}

export default Hair;
