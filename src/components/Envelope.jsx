import { motion } from "framer-motion";
import { useState } from "react";

function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <div className="envelope-wrapper" onClick={handleClick}>
      <motion.div
        className={`envelope ${opening ? "opening" : ""}`}
        whileHover={!opening ? { scale: 1.05 } : {}}
      >
        <div className="flap"></div>

        <div className="letter-preview">
          ❤️
        </div>
      </motion.div>

      {!opening && (
        <p className="click-text">
          Click to Open
        </p>
      )}
    </div>
  );
}

export default Envelope;