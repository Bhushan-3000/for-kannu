import { useState } from "react";
import { motion } from "framer-motion";

function Appreciation() {

  const [opened, setOpened] = useState(false);
const [openedCards, setOpenedCards] = useState([]);

  const toggleCard = (index) => {

  setOpenedCards((prev)=>{

    if(prev.includes(index)){
      return prev.filter((id)=>id !== index);
    }

    return [...prev,index];

  });

};


  const cards = [
    {
      title:"✨ Your Heart",
      text:"I admire how beautifully your heart loves. You care deeply, you feel deeply, and even when life gets heavy, you still find ways to make people around you feel loved."
    },

    {
      title:"🤍 Your Selflessness",
      text:"I admire how you always think about others before yourself. The way you take care of your family, help at home, and still make time for people you love shows the kind of person you are."
    },

    {
      title:"🌸 Your Strength",
      text:"I admire the strength nobody else sees. The days when you’re tired, overwhelmed, or not feeling your best, you still keep going and handle things with so much courage."
    },

    {
      title:"✝️ Your Faith",
      text:"I admire the way you keep God at the centre of your life. The way you pray, seek guidance, and want to make decisions according to God’s will inspires me to grow spiritually too."
    },

    {
      title:"🫂 Your Patience",
      text:"I admire how you don’t just look at someone’s mistakes—you try to understand their heart behind them. You’ve taught me that love requires patience, forgiveness, and grace."
    },

    {
      title:"🌷 Your Thoughtfulness",
      text:"I admire how you express love through little things. The brownies, cookies, roses, protein bars, little surprises… you show love not just through words but through your actions."
    },

    {
      title:"🥹 Your Softness",
      text:"I admire the gentle person you are. The way you get excited over little things, the way you care, the way you love your people—it’s something very special."
    },

    {
      title:"🌙 Your Honesty",
      text:"I admire that you don't just pretend everything is okay. You communicate your feelings, fears, and thoughts because you genuinely want things to be better."
    },

    {
      title:"🌻 Your Growth",
      text:"I admire how you always want to become better—not just for yourself, but for God, your family, and the people you love."
    },

    // {
    //   title:"❤️ The Way You Love Me",
    //   text:"The thing I admire most is that you make me feel chosen. Through your efforts, your little surprises, your prayers, and your presence, you remind me that love is not just something we say… it’s something we do."
    // }
  ];


  const specialCards = [

{
title:"🎁 Your Way of Loving Me",

text:
`I admire how you don’t just say you love me… you show it through your actions.

I love how you plan dates for us, take me to places, and create beautiful memories with me.

The fact that you put thought into spending time with me makes me feel so special.

I admire how you surprise me with little gifts, not because of the gifts themselves, but because every surprise carries a piece of your love and effort.

I love how you cook my favourite food for me — the brownies, cookies, rum cake, and all those little things you make with so much care.

They are not just food to me… they are little pieces of your heart that you share with me. 🥹`
},

{
title:"🤍 My Favourite Thing About You",

text:
`You are not special because you are perfect.

You are special because you are you.

And I hope you always see yourself the way I see you —

Someone deeply loved, beautifully made, and truly unforgettable. ❤️`
}

];

  return (

    <section className="appreciation">


      <motion.h2
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
      >
        🌻 Things I Admire About You, Kannu 🤍
      </motion.h2>


      {!opened && (

        <button
          className="heart-open-btn"
          onClick={()=>setOpened(true)}
        >
          💌 Open My Heart
        </button>

      )}



      {
        opened && (

        <motion.div
          className="admire-grid"
          initial={{opacity:0}}
          animate={{opacity:1}}
        >

          {
            cards.map((card,index)=>(

              <motion.div

                key={index}

                className={`paper-card ${openedCards.includes(index) ? "active":""}`}

                onClick={()=>toggleCard(index)}

                whileHover={{
                  y:-10
                }}

              >

                {
                  openedCards.includes(index) ?

                  <>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </>

                  :

                  <>
                    <div className="card-heart">
                      ❤️
                    </div>

                    <h3>
                      Click to open
                    </h3>
                  </>

                }



              </motion.div>

            ))
            
          }






        </motion.div>




        )

      }


    </section>

  );

}


export default Appreciation;