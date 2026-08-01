import { useState } from "react";
import { motion } from "framer-motion";

function SecretMessage(){

const [clicks,setClicks] = useState(0);


const handleClick = () => {

setClicks(prev => prev + 1);

};


return(

<section className="secret-section">


<div
className="secret-heart"
onClick={handleClick}
>

❤️

</div>


<p className="secret-hint">

P.S. I left one tiny surprise here... 
<br/>
Maybe tap this heart 5 times? 😉

</p>



{
clicks >= 5 &&

<motion.div

className="secret-message"

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

>


<h2>
You found my little secret ❤️
</h2>


<p>
No matter how many pages I write,
I don't think they will ever be enough
to explain how special you are.

Thank you for being you, Kannu.

Never forget that you are deeply loved. 🤍
</p>


</motion.div>

}


</section>

)

}


export default SecretMessage;