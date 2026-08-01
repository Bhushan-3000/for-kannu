import { motion } from "framer-motion";

function PromiseSection(){

return(

<section className="promise-section">

<motion.div

initial={{
opacity:0,
y:50
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


<div className="promise-heart">
🤍
</div>


<h2>
A Little Promise To You, Kannu
</h2>


<p>
I can't promise that every day will be perfect,
or that life will always be easy.
</p>


<p>
But I can promise that I will keep trying,
keep understanding,
and keep choosing you.
</p>


<p>
I will keep learning,
keep growing,
and keep becoming someone
who brings happiness into your life.
</p>


<p className="promise-end">
Always cheering for you ❤️
</p>


</motion.div>


</section>

)

}


export default PromiseSection;