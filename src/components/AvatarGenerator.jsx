import { useState } from "react";
import AvatarDisplay from "./AvatarDisplay";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getVibrantColor() {
  const colors = [
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
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomFace() {
  return {
    shape: getRandomItem([
      "circle",
      "oval",
      "square",
      "rounded-square",
      "heart",
      "diamond",
      "pear",
      "asymmetric",
      "hexagon",
      "rounded-triangle",
    ]),
    color: getVibrantColor(),
    size: 120 + Math.floor(Math.random() * 60),
    rotation: Math.floor(Math.random() * 10) - 5,
    bgWidthMultiplier: 1.8 + Math.random() * 0.4,
    bgHeightMultiplier: 2.2 + Math.random() * 0.4,
    bgRoundness: Math.floor(Math.random() * 20) + 10,
    stripes: Math.random() > 0.7, // 30% chance of stripes
    stripeColor: getVibrantColor(),
    stripeCount: Math.floor(Math.random() * 3) + 2, // 2-4 stripes
    stripeWidth: Math.random() * 15 + 5,
    stripeRotation: Math.random() * 180 - 90,
  };
}

function generateRandomHair() {
  const styles = [
    "short",
    "long",
    "spiky",
    "curly", // More common hair
    "beanie",
    "cap",
    "fedora", // Less common hats
  ];

  return {
    style: getRandomItem(styles),
    color: getVibrantColor(),
  };
}

function generateRandomEyes() {
  return {
    type: getRandomItem([
      "realistic",
      "anime",
      "sleepy",
      "sparkle",
      "circle",
      "oval",
      "rectangle",
      "closed",
    ]),
    color: getVibrantColor(),
    size: 8 + Math.floor(Math.random() * 8),
    spacing: 20 + Math.floor(Math.random() * 20),
  };
}

function generateRandomMouth() {
  return {
    type: getRandomItem([
      "smile",
      "grin",
      "frown",
      "neutral",
      "surprised",
      "smirk",
      "teeth",
      "pout",
      "open",
    ]),
    color: "#c66", // Default lip color or use getVibrantColor()
    size: 15 + Math.floor(Math.random() * 15),
  };
}


function generateRandomAccessories() {
  const glasses = generateRandomEyeglasses();
  return {
    beard: Math.random() > 0.6,
    mustache: Math.random() > 0.9,
    nose: Math.random() > 0.3,
    ears: Math.random() > 0.9,
    color: getVibrantColor(),
    ...glasses, // Spread the glasses properties
  };
}

export function generateRandomEyeglasses() {
  const styles = ["regular", "full", "sunglasses"];
  const shapes = [
    "round",
    "rectangle",
    "oval",
    "cat-eye",
    "aviator",
    "hexagon",
    "octagon",
    "rounded-square",
  ];
  const colors = [
    /* your color array */
  ];

  return {
    eyeglasses: Math.random() > 0.3,
    eyeglassesStyle: styles[Math.floor(Math.random() * styles.length)],
    eyeglassesShape: shapes[Math.floor(Math.random() * shapes.length)],
    eyeglassesColor: colors[Math.floor(Math.random() * colors.length)],
    eyeglassesOpacity: Math.random() * 0.5 + 0.3,
  };
}

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function AvatarGenerator() {
  const [face, setFace] = useState(generateRandomFace());
  const [hair, setHair] = useState(generateRandomHair());
  const [eyes, setEyes] = useState(generateRandomEyes());
  const [mouth, setMouth] = useState(generateRandomMouth());
  const [accessories, setAccessories] = useState(generateRandomAccessories());
  const [backgroundColor, setBackgroundColor] = useState(getVibrantColor());
  const [padding] = useState(Math.floor(Math.random() * 40) + 20); // Increased padding range

  const regenerateAll = () => {
    setFace(generateRandomFace());
    setHair(generateRandomHair());
    setEyes(generateRandomEyes());
    setMouth(generateRandomMouth());
    setAccessories(generateRandomAccessories());
    setBackgroundColor(getVibrantColor());
  };

  const handleNewFace = () => {
    setFace((prev) => ({
      ...generateRandomFace(),
      // Preserve stripe properties if they exist
      stripes: prev.stripes,
      stripeColor: prev.stripeColor,
      stripeCount: prev.stripeCount,
      stripeWidth: prev.stripeWidth,
    }));
  };

  // Add controls to modify stripes
  const toggleStripes = () => {
    setFace((prev) => ({
      ...prev,
      stripes: !prev.stripes,
    }));
  };

  const changeStripeColor = () => {
    setFace((prev) => ({
      ...prev,
      stripeColor: getVibrantColor(),
    }));
  };

  return (
    <div className="avatar-generator">
      <div className="avatar-container">
        <div className="avatar-display w-full max-w-md aspect-square mx-auto p-4">
          <AvatarDisplay
            face={face}
            hair={hair}
            eyes={eyes}
            mouth={mouth}
            accessories={accessories}
            padding={padding}
            backgroundColor={backgroundColor}
          />
        </div>

        <div className="controls">
          <button onClick={regenerateAll} className="generate-btn">
            Generate New Avatar
          </button>

          <div className="part-controls">
            <button
              onClick={() => setFace(generateRandomFace())}
              className="part-btn"
            >
              New Face
            </button>
            <button
              onClick={() => setHair(generateRandomHair())}
              className="part-btn"
            >
              New Hair
            </button>
            <button
              onClick={() => setEyes(generateRandomEyes())}
              className="part-btn"
            >
              New Eyes
            </button>
            <button
              onClick={() => setMouth(generateRandomMouth())}
              className="part-btn"
            >
              New Mouth
            </button>
            <button
              onClick={() => setAccessories(generateRandomAccessories())}
              className="part-btn"
            >
              New Accessories
            </button>
            <button
              onClick={() => setBackgroundColor(getVibrantColor())}
              className="part-btn"
            >
              New Background
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <button onClick={toggleStripes} className="bg-red-400 rounded-full text-slate-200 h-10">
              {face.stripes ? "Remove Stripes" : "Add Stripes"}
            </button>
            {face.stripes && (
              <>
                <button onClick={changeStripeColor} className="part-btn">
                  Change Stripe Color
                </button>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={face.stripeCount}
                  onChange={(e) =>
                    setFace((prev) => ({
                      ...prev,
                      stripeCount: parseInt(e.target.value),
                    }))
                  }
                />
                <input
                  type="range"
                  min="3"
                  max="20"
                  value={face.stripeWidth}
                  onChange={(e) =>
                    setFace((prev) => ({
                      ...prev,
                      stripeWidth: parseInt(e.target.value),
                    }))
                  }
                />
              </>
            )}
          </div>

          

          <button
            onClick={() =>
              document
                .querySelector(".avatar-display svg")
                ?.dispatchEvent(new Event("download"))
            }
            className="download-btn"
          >
            Download SVG
          </button>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <h3>Face Shape</h3>
          <p>{face.shape}</p>
        </div>
        <div className="feature">
          <h3>Hair Style</h3>
          <p>{hair.style}</p>
        </div>
        <div className="feature">
          <h3>Eyes</h3>
          <p>{eyes.type}</p>
        </div>
        <div className="feature">
          <h3>Mouth</h3>
          <p>{mouth.type}</p>
        </div>
      </div>
    </div>
  );
}

export { clamp, getRandomItem, getVibrantColor };
export default AvatarGenerator;
