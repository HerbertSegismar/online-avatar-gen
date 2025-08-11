import { useRef, useEffect } from "react";
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

  // Center coordinates
  const centerX = 100;
  const centerY = 110;
  const faceSize = clamp(face.size, 100, 150);

  // Calculate positions with clamping
  const maxHairHeight = faceSize * 0.4;
  const hairTop = clamp(
    centerY - faceSize / 2 - padding / 2,
    centerY - faceSize / 2 - maxHairHeight,
    centerY - faceSize / 2 + 10
  );

  // Facial feature positions
  const eyeY = centerY - faceSize * 0.2;
  const mouthY = centerY + faceSize * 0.3;

  // Clamp sizes
  const eyeSize = clamp(eyes.size, 5, 20);
  const eyeSpacing = clamp(eyes.spacing, 15, 40);
  const mouthSize = clamp(mouth.size, 10, 30);

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
      width="250"
      height="250"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
    >
      <rect width="200" height="200" rx="20" fill={backgroundColor} />

      <g transform={`rotate(${face.rotation} ${centerX} ${centerY})`}>
        {/* Face rendered first */}
        <Face face={face} faceX={centerX} faceY={centerY} faceSize={faceSize} />
        {/* Hair rendered AFTER face to ensure it appears in front */}
        {hair.style !== "bald" && (
          <Hair hair={hair} faceX={centerX} faceY={centerY} faceSize={faceSize} />
        )}

        {/* Facial features */}
        <Eyes
          eyes={eyes}
          faceX={centerX}
          eyeY={eyeY}
          eyeSize={eyeSize}
          eyeSpacing={eyeSpacing}
        />

        <Mouth
          mouth={mouth}
          faceX={centerX}
          mouthY={mouthY}
          mouthSize={mouthSize}
        />

        <Accessories
          accessories={accessories}
          faceX={centerX}
          faceY={centerY}
          faceSize={faceSize}
          eyeY={eyeY}
          eyeSpacing={eyeSpacing}
        />
      </g>
    </svg>
  );
}

export default AvatarDisplay;
