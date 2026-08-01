import { motion } from "framer-motion";

function FinalSurprise(){

  return (

    <section className="final-section">

      <motion.div

        className="final-content"

        initial={{
          opacity:0,
          y:80
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:1
        }}

      >

        <div className="big-heart">
          ❤️
        </div>


        <h2>
          One Last Thing...
        </h2>


        <p>
          No matter how busy life gets,
          no matter how many challenges come,
          I hope you always remember one thing...
        </p>


        <p>
          You are someone very special to me.
        </p>


        <p>
          Thank you for being a part of my life,
          for your kindness, your strength,
          and the beautiful person you are.
        </p>


        <h3>
          Happy Girlfriend's Day, Kannu ❤️
        </h3>


        <p>
          God bless u always.
        </p>


        <h4>
          — Tumhara one & only Pookie wala Cookie ❤️
        </h4>


      </motion.div>

    </section>

  )

}

export default FinalSurprise;