function Hair({ hair, faceX, faceY, faceSize }) {
  const { style, color } = hair;
  const hairBaseY = faceY - faceSize * 0.35; // Much lower position
  const hatBaseY = faceY - faceSize * 0.3; // Even lower for hats
  const hatHeight = faceSize * 0.45;
  const brimWidth = faceSize * 1.6;
  const hatFill = `${color} url(#hatPattern)`; 
  const hairHeight = faceSize * 0.5;

  switch (style) {
    // Hair Styles
    case "short":
      return (
        <path
          d={`M${faceX - faceSize / 2} ${hairBaseY + 10}
               Q${faceX - faceSize / 4} ${hairBaseY}, ${faceX} ${hairBaseY - 5}
               Q${faceX + faceSize / 4} ${hairBaseY}, ${faceX + faceSize / 2} ${
            hairBaseY + 10
          }
               L${faceX + faceSize / 2} ${hairBaseY + faceSize * 0.15}
               Q${faceX} ${hairBaseY + faceSize * 0.2}, ${
            faceX - faceSize / 2
          } ${hairBaseY + faceSize * 0.15}
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

    case "spiky":
      const spikeCount = 18; // More spikes for fuller coverage
      return (
        <g>
          {/* Base hair shape that blends into head */}
          <path
            d={`M${faceX - faceSize / 2} ${hairBaseY}
             Q${faceX} ${hairBaseY - faceSize * 0.1}, ${
              faceX + faceSize / 2
            } ${hairBaseY}
             L${faceX + faceSize / 2} ${hairBaseY + faceSize * 0.05}
             Q${faceX} ${hairBaseY + faceSize * 0.08}, ${
              faceX - faceSize / 2
            } ${hairBaseY + faceSize * 0.05}
             Z`}
            fill={color}
          />

          {/* Upward-pointing spikes */}
          {Array.from({ length: spikeCount }).map((_, i) => {
            const x = faceX - faceSize / 2 + (i * faceSize) / (spikeCount - 1);
            const spikeHeight = faceSize * 0.4 + Math.random() * faceSize * 0.2;
            const spikeWidth = faceSize * 0.07;
            const curve = faceSize * 0.03;

            return (
              <path
                key={i}
                d={`M${x} ${hairBaseY}
                 Q${x + spikeWidth / 2} ${
                  hairBaseY - spikeHeight * 0.6 + curve
                }, 
                 ${x + spikeWidth} ${hairBaseY - spikeHeight}
                 Q${x + spikeWidth / 2} ${
                  hairBaseY - spikeHeight * 1.1 - curve
                }, 
                 ${x} ${hairBaseY - spikeHeight * 0.9}`}
                fill={color}
              />
            );
          })}
        </g>
      );

    case "curly":
      const curlCount = 14;
      const curlSizeBase = faceSize * 0.1;
      return (
        <g>
          {/* Base hair volume */}
          <path
            d={`M${faceX - faceSize / 2} ${hairBaseY}
             Q${faceX} ${hairBaseY - faceSize * 0.15}, ${
              faceX + faceSize / 2
            } ${hairBaseY}
             Q${faceX} ${hairBaseY + faceSize * 0.1}, ${
              faceX - faceSize / 2
            } ${hairBaseY}Z`}
            fill={color}
          />

          {/* Organic curls */}
          {Array.from({ length: curlCount }).map((_, i) => {
            const angle = (i / curlCount) * Math.PI * 2;
            const distance = faceSize * 0.35 + Math.random() * faceSize * 0.05;
            const x = faceX + Math.cos(angle) * distance * 0.8;
            const y = hairBaseY - 10 + Math.sin(angle) * distance * 0.5;
            const curlSize = curlSizeBase * (0.8 + Math.random() * 0.4);
            const curlWidth = curlSize * (0.7 + Math.random() * 0.3);

            return (
              <path
                key={i}
                d={`M${x} ${y}
                 C${x + curlWidth} ${y - curlSize * 0.8},
                 ${x + curlWidth * 0.7} ${y - curlSize * 1.5},
                 ${x} ${y - curlSize * 1.2}
                 C${x - curlWidth * 0.7} ${y - curlSize * 1.5},
                 ${x - curlWidth} ${y - curlSize * 0.8},
                 ${x} ${y}`}
                fill={color}
                stroke={darkenColor(color, 15)}
                strokeWidth="0.5"
              />
            );
          })}
        </g>
      );

    // Hat Styles
    case "beanie":
      return (
        <g>
          <defs>
            <pattern
              id="hatPattern"
              patternUnits="userSpaceOnUse"
              width="10"
              height="10"
            >
              <path
                d="M0,0 L10,10"
                stroke={darkenColor(color, 20)}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <path
            d={`M${faceX - faceSize * 0.6} ${hatBaseY}
                 Q${faceX} ${hatBaseY - hatHeight * 1.2}, ${
              faceX + faceSize * 0.6
            } ${hatBaseY}
                 L${faceX + faceSize * 0.4} ${hatBaseY - hatHeight * 0.8}
                 Q${faceX} ${hatBaseY - hatHeight}, ${faceX - faceSize * 0.4} ${
              hatBaseY - hatHeight * 0.8
            }Z`}
            fill={hatFill}
            stroke={darkenColor(color, 30)}
            strokeWidth="1.5"
          />
        </g>
      );

    case "cap":
      return (
        <g>
          <defs>
            <pattern
              id="hatPattern"
              patternUnits="userSpaceOnUse"
              width="15"
              height="15"
            >
              <circle cx="7.5" cy="7.5" r="5" fill={darkenColor(color, 10)} />
            </pattern>
          </defs>
          {/* Brim */}
          <path
            d={`M${faceX - brimWidth / 2} ${hatBaseY}
                 Q${faceX} ${hatBaseY + faceSize * 0.1}, ${
              faceX + brimWidth / 2
            } ${hatBaseY}`}
            fill={darkenColor(color, 25)}
          />
          {/* Cap body */}
          <path
            d={`M${faceX - faceSize * 0.5} ${hatBaseY}
                 Q${faceX} ${hatBaseY - hatHeight * 1.3}, ${
              faceX + faceSize * 0.5
            } ${hatBaseY}
                 Q${faceX} ${hatBaseY - hatHeight * 0.7}, ${
              faceX - faceSize * 0.5
            } ${hatBaseY}Z`}
            fill={hatFill}
            stroke={darkenColor(color, 30)}
            strokeWidth="1.5"
          />
        </g>
      );

    case "fedora":
      return (
        <g>
          <defs>
            <pattern
              id="hatPattern"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
            >
              <rect
                x="0"
                y="0"
                width="10"
                height="10"
                fill={darkenColor(color, 15)}
              />
            </pattern>
          </defs>
          {/* Brim */}
          <path
            d={`M${faceX - brimWidth / 2} ${hatBaseY}
                 Q${faceX} ${hatBaseY + faceSize * 0.15}, ${
              faceX + brimWidth / 2
            } ${hatBaseY}
                 Q${faceX} ${hatBaseY - faceSize * 0.1}, ${
              faceX - brimWidth / 2
            } ${hatBaseY}Z`}
            fill={darkenColor(color, 25)}
          />
          {/* Crown */}
          <path
            d={`M${faceX - faceSize * 0.35} ${hatBaseY - hatHeight * 0.3}
                 Q${faceX} ${hatBaseY - hatHeight * 1.1}, ${
              faceX + faceSize * 0.35
            } ${hatBaseY - hatHeight * 0.3}
                 Q${faceX} ${hatBaseY - hatHeight * 0.6}, ${
              faceX - faceSize * 0.35
            } ${hatBaseY - hatHeight * 0.3}Z`}
            fill={hatFill}
            stroke={darkenColor(color, 30)}
            strokeWidth="1.5"
          />
        </g>
      );

    default:
      return null;
  }
}

// Helper functions
function darkenColor(hex, percent) {
  // Your implementation
  return hex;
}

function lightenColor(hex, percent) {
  // Your implementation
  return hex;
}

export default Hair;
