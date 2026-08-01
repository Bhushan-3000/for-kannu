import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import LoveLetter from "./LoveLetter";
import couplePhoto from "../assets/photos/photo1.png";

function Hero() {
  const typedRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Hey Kannu ❤️",
        "Happy Girlfriend's Day 💖",
        "I made something special for you..."
      ],
      typeSpeed: 55,
      backSpeed: 25,
      backDelay: 1800,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  if (open) {
    return <LoveLetter />;
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <img    
            src={couplePhoto}
            autoPlay
            muted
            loop
            alt="Us"
            className="hero-photo"
        />

        <h1 ref={typedRef}></h1>

        <p>
          Every line of this website was made with love,
          just for you.
        </p>

        <button onClick={() => setOpen(true)}>
          Open My Heart ❤️
        </button>

      </div>
    </section>
  );
}

export default Hero;