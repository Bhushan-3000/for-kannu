import MusicPlayer from "./components/MusicPlayer";
import Background from "./components/Background";
import Hero from "./components/Hero";
import Petals from "./components/Petals";
import Gallery from "./components/Gallery";
import Appreciation from "./components/Appreciation";
import PromiseSection from "./components/PromiseSection";
import FinalSurprise from "./components/FinalSurprise";
import NightEnding from "./components/NightEnding";
import SecretMessage from "./components/SecretMessage";
import Footer from "./components/Footer";


function App() {

  return (

    <>

      {/* Background effects */}
      <Background />
      <Petals />


      {/* Music controller */}
      <MusicPlayer />


      {/* Main experience */}
      <main>

        <Hero />

        <Gallery />

        <Appreciation />

        <PromiseSection />

        <FinalSurprise />

        <NightEnding />

        <SecretMessage />
      </main>


      {/* Ending */}
      <Footer />

    </>

  );

}


export default App;