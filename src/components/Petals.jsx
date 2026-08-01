import { useEffect, useState } from "react";

function Petals(){

  const [petals,setPetals] = useState([]);

  useEffect(()=>{

    const items=[];

    for(let i=0;i<25;i++){

      items.push({
        id:i,
        left:Math.random()*100,
        delay:Math.random()*10,
        duration:8+Math.random()*8,
        size:15+Math.random()*20
      });

    }

    setPetals(items);

  },[]);


  return(
    <div className="petals">

      {
        petals.map((petal)=>(

          <div
            key={petal.id}
            className="petal"
            style={{
              left:`${petal.left}%`,
              animationDelay:`${petal.delay}s`,
              animationDuration:`${petal.duration}s`,
              fontSize:`${petal.size}px`
            }}
          >
            🌸
          </div>

        ))
      }

    </div>
  )

}

export default Petals;