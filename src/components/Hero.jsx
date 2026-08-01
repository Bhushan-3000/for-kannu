import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import LoveLetter from "./LoveLetter";
import couplePhoto from "../assets/photos/photo1.png";
import Envelope from "./Envelope";

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

    <div className="hero-overlay"></div>

    <div className="hero-content">

      <p className="made">
        Made with ❤️
      </p>

      <h1 ref={typedRef}></h1>

      <p className="subtitle">
        Every heartbeat...
        Every memory...
        Every word here is only for you.
      </p>

      <Envelope onOpen={() => setOpen(true)} />

    </div>

  </section>
);
}

export default Hero;