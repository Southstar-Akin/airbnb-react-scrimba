import React from "react";


function Card({...pack}){
  let stat = ["Sold Out","Online","Available"]
  if (pack.openspots === 0){
    pack.status = 0
  }else if (pack.openspots !== 0){
    pack.status = 1
  }
  return(
    <div className="grid max-w-[310px] min-w-[310px] ">
    <div className="relative ">
    <img src={pack.image} alt="" className=" justify-self-center w-[264px] h-[353px]" />
 {pack.location === "online" && <span className="absolute top-[1.4vh] left-[1.4vw] bg-white uppercase font-light p-1">{stat[pack.status]}</span>}
    </div>
        <div className="grid grid-auto-row text-[1.3em] font-[300]">
          <div className="mt-[9px] h-[20px]  ">
            <span className=" before:content-star before:mr-[3px] ">{pack.rating}</span>
            <span className=" text-gray-500 font-[200] ml-1">({pack.num}) ・ {pack.country}</span>
          </div>
          <span className="mt-[12px]">{pack.desc}</span>
          <span><span className="font-[600]">From ${pack.price}</span> / person</span>
        </div>
  </div>
  )
}

export default Card