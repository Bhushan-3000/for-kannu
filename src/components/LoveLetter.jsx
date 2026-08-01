import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import signature from "../assets/signature.jpeg";

function LoveLetter() {
  return (
    <motion.section
      className="letter-section"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      <div className="letter">

        <FadeInSection>
            <p className="letter-date">
                01 August 2026
                <br />
                Girlfriend's Day
            </p>
          <h2>
            My Dearest Kannu ❤️
          </h2>
        </FadeInSection>


        <FadeInSection>
          <p>
            I don't even know where to begin.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            When Girlfriend's Day was getting closer, I kept thinking
            that I wanted to do something special for you. Then today
            became one of those days where everything was so busy that
            I barely got a moment to breathe.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            Before I knew it, it was already late at night. For a few
            minutes, I felt disappointed because I thought I missed my
            chance to make today special.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            Then I realized something...
          </p>

          <p>
            It doesn't matter if it's late.
            What matters is that it comes from my heart.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            So instead of letting the day pass, I stayed up making
            this little website just for you.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            Every animation, every color, every line, and every little
            detail was created while thinking about you. I kept
            imagining you opening it and smiling.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            Life hasn't always been easy for either of us.
            There have been days filled with stress, responsibilities,
            misunderstandings, waiting, and uncertainty.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            But through all of that, one thing has stayed the same...
            I have never stopped caring about you.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            One of the things I admire most about you is your strength.
            Even when life gets difficult, you keep moving forward.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            Your faith, your kindness, your heart, and the way you care
            for the people you love inspire me more than you probably
            realize.
          </p>
        </FadeInSection>


        <FadeInSection>
          <h3>
            I would still choose you ❤️
          </h3>
        </FadeInSection>


        <FadeInSection>
          <p>
            You remind me that love isn't only about grand gestures
            or perfect days.
          </p>

          <p>
            Sometimes it's simply choosing someone again and again,
            even on ordinary days.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            Thank you for every conversation we've had, every laugh
            we've shared, every memory we've created, and even the
            difficult moments that taught us patience and understanding.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            I don't know exactly what the future has planned for us,
            but I do know this...
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            As long as you're chasing your dreams, I'll always be
            cheering for you.
            <br /><br />
            As long as you need someone to believe in you, I'll be there.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            Whenever life feels heavy, I hope you remember that there
            is someone praying for your happiness and smiling because
            you exist.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            Thank you for being you.
            <br />
            Thank you for bringing your light into my life.
          </p>
        </FadeInSection>


        <FadeInSection>
          <h3>
            Happy Girlfriend's Day, Kannu ❤️
          </h3>
        </FadeInSection>


        <FadeInSection>
          <p>
            May God continue to guide you, protect you, and fill your
            life with peace, joy, and endless blessings.
          </p>
        </FadeInSection>


        <FadeInSection>
          <p>
            And thank you for giving me another reason to believe that
            beautiful things often arrive quietly.
          </p>
        </FadeInSection>


        <FadeInSection>
        <div className="signature-box">

            <p>
            With all my love,
            </p>

            <img
            src={signature}
            alt="Bhushan signature"
            />

        </div>
        </FadeInSection>


        <FadeInSection>
          <p className="ps-note">
            P.S.
            <br /><br />
            I know this isn't the biggest gift in the world.
            But every line of code, every animation, and every little
            detail on this website was made while thinking about you.
            <br /><br />
            So in a way...
            <br /><br />
            This isn't just a website.
            <br />
            It's a tiny piece of my heart.
            <br /><br />
            God bless u always😇<br />I Love You to the Moon and Beyond Forever & Ever ❤️✨
          </p>
        </FadeInSection>

      </div>

    </motion.section>
  );
}

export default LoveLetter;