import { useState, useEffect, useRef } from "react";

function Outro() {
  const [messageCounter, setMessageCounter] = useState(0);

  const closingMessages = [
    "And so Anita Braveheart, First of Her Name",
    "Did bring the trials to their noble end in most resplendent triumph,",
    "Proving, as she deemed, her valentine-worthiness before all realms",
    "Yet in the waning light she discovered she had never need to prove her worth at all",
    "For there walketh none more fair than she beneath the vaulted heavens",
    "Nor any soul more deserving of love’s tender devotion and gentle care",
    "For her spirit is as pure as the crystal stream at dawn’s first light",
    "And her heart more precious than all the jewels coin might ever procure",
    "For in all that she is, a treasure most wondrous awaits, befitting her angelic grace",
    "She must needs present a likeness of this very page, captured in faithful rendering, unto her destined soulmate, that she may lay rightful claim to her treasure."
  ];


  // Text progression
  useEffect(() => {
    if (messageCounter >= closingMessages.length - 1) return;

    const interval = setInterval(() => {
      setMessageCounter((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [messageCounter]);

  return (
    <div className="mainscreenDiv">
      <span
        style={{
          fontSize: "5rem",
          color: "#ffefca",
          fontFamily: '"Playfair Display", serif'
        }}
      >
        {closingMessages[messageCounter]}
      </span>
    </div>
  );
}

export default Outro;
