import { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import music from "../assets/music/love.mp3";

function MusicPlayer() {

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);


  const playMusic = async () => {

    try {

      await audioRef.current.play();

      setPlaying(true);

    } catch (error) {

      console.log("Autoplay blocked by browser");

    }

  };


  const toggleMusic = async () => {

    if (playing) {

      audioRef.current.pause();
      setPlaying(false);

    } else {

      await playMusic();

    }

  };


  useEffect(() => {

    // Try autoplay immediately
    playMusic();


    // Backup: start after first interaction
    const startAfterInteraction = () => {

      playMusic();

      window.removeEventListener(
        "click",
        startAfterInteraction
      );

      window.removeEventListener(
        "touchstart",
        startAfterInteraction
      );

      window.removeEventListener(
        "scroll",
        startAfterInteraction
      );

    };


    window.addEventListener(
      "click",
      startAfterInteraction
    );

    window.addEventListener(
      "touchstart",
      startAfterInteraction
    );

    window.addEventListener(
      "scroll",
      startAfterInteraction
    );


    return () => {

      window.removeEventListener(
        "click",
        startAfterInteraction
      );

      window.removeEventListener(
        "touchstart",
        startAfterInteraction
      );

      window.removeEventListener(
        "scroll",
        startAfterInteraction
      );

    };


  }, []);



  return (

    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src={music}
          type="audio/mpeg"
        />
      </audio>


      <button
        className={`music-btn ${playing ? "playing" : ""}`}
        onClick={toggleMusic}
      >

        {
          playing
          ? <FaVolumeUp />
          : <FaVolumeMute />
        }

      </button>

    </>

  );

}

export default MusicPlayer;