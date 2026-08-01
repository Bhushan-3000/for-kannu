import { motion } from "framer-motion";


function NightEnding(){

return(

<section className="night-ending">


<motion.div

initial={{
opacity:0,
y:40
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


<div className="moon">
🌙
</div>


<h2>
Until Our Next Memory...
</h2>


<p>
More smiles.
<br/>
More laughs.
<br/>
More little moments together.
</p>


<div className="stars">
✨ ✨ ✨
</div>


<p className="ending-heart">
Forever cheering for you ❤️
</p>


</motion.div>


</section>

)

}


export default NightEnding;