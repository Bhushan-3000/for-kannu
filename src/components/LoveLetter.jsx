import { motion } from "framer-motion";

function LoveLetter() {
  return (
    <motion.section
      className="letter-section"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="letter">

        <h2>To My Dearest Kannu ❤️</h2>

        <p>
          If someone had told me that one person could quietly become
          such an important part of my life...
          I probably wouldn't have believed them.
        </p>

        <p>
          Yet here you are.
        </p>

        <p>
          Thank you for every smile,
          every laugh,
          every conversation,
          every prayer,
          and every little moment we've shared.
        </p>

        <p>
          Life hasn't always been easy for us,
          but through every difficult day,
          one thing has never changed...
        </p>

        <h3>
          I'd still choose you.
        </h3>

        <p>
          Thank you for being you.
        </p>

        <p>
          Happy Girlfriend's Day ❤️
        </p>

        <h2>
          I Love You,
          <br />
          Bhushan
        </h2>

      </div>
    </motion.section>
  );
}

export default LoveLetter;