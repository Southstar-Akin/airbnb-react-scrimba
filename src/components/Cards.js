import React from "react";
import CardsList from "./CardData";
import Card from './Card'


function Cards(){

  const cardslist = CardsList.map((pack) => {

            return <Card 
              key = {pack.id}
              {...pack}
              />

            }
  )
  
  return(
    <div className="grid grid-flow-col mt-[49px] ml-[32px] gap-x-[10px] overflow-auto scrollbar scrollbar-thumb-[transparent] justify-items-center ">
      
     {cardslist}

</div> 

  )
}

export default Cards

