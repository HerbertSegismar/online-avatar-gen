import { getVibrantColor } from "./AvatarGenerator";

function Accessories({ accessories, faceX, faceY, faceSize, eyeSpacing }) {
  const { beard, mustache, nose, ears, color } = accessories;
  const earSize = faceSize * 0.18;
  const noseWidth = faceSize * 0.15;
  const noseHeight = faceSize * 0.2;

  return (
    <>
      {/* Organic Ears - only show if enabled */}
      {ears && (
        <>
          {/* Left Ear */}
          <path
            d={`M${faceX - eyeSpacing * 1.2} ${faceY - faceSize * 0.1}
                 Q${faceX - eyeSpacing * 1.3} ${faceY}, 
                 ${faceX - eyeSpacing * 1.2} ${faceY + faceSize * 0.15}
                 Q${faceX - eyeSpacing * 0.9} ${faceY + faceSize * 0.1},
                 ${faceX - eyeSpacing * 0.8} ${faceY - faceSize * 0.05}
                 Q${faceX - eyeSpacing} ${faceY - faceSize * 0.15},
                 ${faceX - eyeSpacing * 1.2} ${faceY - faceSize * 0.1}`}
            fill={color || "#F5CBA7"}
            stroke="#000"
            strokeWidth="1"
          />

          {/* Right Ear */}
          <path
            d={`M${faceX + eyeSpacing * 1.2} ${faceY - faceSize * 0.1}
                 Q${faceX + eyeSpacing * 1.3} ${faceY}, 
                 ${faceX + eyeSpacing * 1.2} ${faceY + faceSize * 0.15}
                 Q${faceX + eyeSpacing * 0.9} ${faceY + faceSize * 0.1},
                 ${faceX + eyeSpacing * 0.8} ${faceY - faceSize * 0.05}
                 Q${faceX + eyeSpacing} ${faceY - faceSize * 0.15},
                 ${faceX + eyeSpacing * 1.2} ${faceY - faceSize * 0.1}`}
            fill={color || "#F5CBA7"}
            stroke="#000"
            strokeWidth="1"
          />
        </>
      )}

      {/* Organic Nose - only show if enabled */}
      {nose && (
        <path
          d={`M${faceX} ${faceY - faceSize * 0.15}
               C${faceX + noseWidth * 0.4} ${faceY}, 
               ${faceX + noseWidth * 0.3} ${faceY + noseHeight}, 
               ${faceX} ${faceY + noseHeight * 0.8}
               C${faceX - noseWidth * 0.3} ${faceY + noseHeight}, 
               ${faceX - noseWidth * 0.4} ${faceY}, 
               ${faceX} ${faceY - faceSize * 0.15}`}
          fill={color || "#FFD699"}
          stroke="#000"
          strokeWidth="1"
        />
      )}

      {/* Mustache */}
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
          fill={color || "#333"}
        />
      )}

      {/* Beard */}
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
          fill={color || "#333"}
        />
      )}
    </>
  );
}

export default Accessories;
