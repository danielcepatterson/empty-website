// src/react-app/ConfettiButton.tsx
import { useRef } from "react";
import confetti from "canvas-confetti";

export default function ConfettiButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <button ref={buttonRef} onClick={handleConfetti} style={{ margin: "1rem", padding: "0.5rem 1.5rem", fontSize: "1.1rem", background: "#ffb347", border: "none", borderRadius: "8px", cursor: "pointer", boxShadow: "0 2px 8px #0002" }}>
      🎉 Celebrate!
    </button>
  );
}
