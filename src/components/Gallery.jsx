import { motion } from "framer-motion";

import photo1 from "../assets/photos/memory1.jpg";
import photo2 from "../assets/photos/memory2.png";
import photo3 from "../assets/photos/memory3.jpg";
import photo4 from "../assets/photos/memory4.jpg";
// import photo5 from "../assets/photos/memory4.jpg";
// import photo6 from "../assets/photos/memory6.jpg";


function Gallery(){

const memories=[
{
image:photo1,
text:"A moment I will always remember ❤️"
},

{
image:photo2,
text:"Your smile makes ordinary days special ✨"
},

{
image:photo3,
text:"One of my favourite memories with you 💖"
},

{
image:photo4,
text:"The girl this website was made for ❤️"
}

];


return(

<section className="gallery-section">

<h2>
Our Little Memories ❤️
</h2>


<div className="gallery">

{
memories.map((memory,index)=>(

<motion.div

key={index}

className="polaroid"

initial={{
opacity:0,
y:80,
rotate:index%2===0?-5:5
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

>

<img 
src={memory.image}
alt="memory"
/>

<p>
{memory.text}
</p>


</motion.div>


))
}


</div>

</section>


)

}


export default Gallery;