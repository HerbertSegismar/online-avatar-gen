import React, { useRef, useEffect } from "react";
import Face from "./Face";
import Hair from "./Hair";
import Eyes from "./Eyes";
import Mouth from "./Mouth";
import Accessories from "./Accessories";
import { clamp } from "./AvatarGenerator";

function AvatarDisplay({
  face,
  hair,
  eyes,
  mouth,
  accessories,
  padding,
  backgroundColor,
}) {
  const svgRef = useRef(null);

  // Center the face with padding
  const faceX = 100;
  const faceY = 100 - padding / 4;

  // Clamp face size to reasonable values
  const faceSize = clamp(face.size, 120, 180);

  // Clamp eye size and position
  const eyeSize = clamp(eyes.size, 5, 20);
  const eyeSpacing = clamp(eyes.spacing, 15, 40);
  const eyeY = clamp(faceY - 20, faceY - 40, faceY);

  // Clamp mouth position and size
  const mouthSize = clamp(mouth.size, 10, 30);
  const mouthY = clamp(faceY + 30, faceY + 10, faceY + 50);

  // Download functionality
  useEffect(() => {
    const handleDownload = () => {
      if (!svgRef.current) return;

      const svgData = new XMLSerializer().serializeToString(svgRef.current);
      const blob = new Blob([svgData], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "random-avatar.svg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    const svgElement = svgRef.current;
    svgElement?.addEventListener("download", handleDownload);

    return () => {
      svgElement?.removeEventListener("download", handleDownload);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="300"
      height="300"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
    >
      <rect width="200" height="200" fill={backgroundColor} />
      <g transform={`rotate(${face.rotation} ${faceX} ${faceY})`}>
        <Face face={face} faceX={faceX} faceY={faceY} faceSize={faceSize} />

        {hair.style !== "bald" && (
          <Hair
            hair={hair}
            faceX={faceX}
            faceY={faceY}
            faceSize={faceSize}
            padding={padding}
          />
        )}

        <Eyes
          eyes={eyes}
          faceX={faceX}
          eyeY={eyeY}
          eyeSize={eyeSize}
          eyeSpacing={eyeSpacing}
        />

        <Mouth
          mouth={mouth}
          faceX={faceX}
          mouthY={mouthY}
          mouthSize={mouthSize}
        />

        <Accessories
          accessories={accessories}
          faceX={faceX}
          faceY={faceY}
          faceSize={faceSize}
          eyeY={eyeY}
          eyeSpacing={eyeSpacing}
          padding={padding}
        />
      </g>
    </svg>
  );
}

export default AvatarDisplay;
