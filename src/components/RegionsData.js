import React, { useState, useEffect } from "react";
import "./regionsData.css";
import { allDatas } from "../allDatas";
import { useParams } from "react-router-dom";

function RegionsData() {
  const [idd, setIdd] = useState(null);
  const [data, setdata] = useState({})
  const [showDatas, setShowDatas] = useState(false)
  const [categories, setcategories] = useState([]);
  const { id } = useParams();
  const filteredDatas = allDatas.filter((item) => item.id === id);

  useEffect(() => {
    filteredDatas.map((item) => setcategories(item.infos));
  }, []);
const getDatas=(id)=>{
   setShowDatas(!showDatas)
setdata({
   shaharNomi:"Bo'stonliq",
   id,
   aholisi:1000,
   kambagallar:"juda kop",
   boylar:"juda kam"
})
}
  return (
    <div>
      {showDatas &&
      <div>
         Shahar nomi:{data.shaharNomi},
         <br/>
         Id:{data.id},
         <br/>
         Shahar aholisi:{data.aholisi},
         <br/>
         Kambagallar soni:{data.kambagallar},
         <br/>
         Boylar soni:{data.boylar},
         <br/>
      </div>
}
{filteredDatas.map(itemm=>(
  <svg
        id={itemm.name}
        baseprofile="tiny"
        width="1800"
        height="1000"
        stroke="#ffffff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        version="1.2"
        viewbox="0 0 1000 652"
        border="1px"
       
      >
        <svg>
          {categories?.map((item) => (
            <path
            onClick={(id)=>{getDatas(item.id)}}
             id={item.id} d={item.d} />
          ))}
        </svg>
        <circle cx="673.4" cy="626" id="0"></circle>
        <circle cx="637.6" cy="506" id="1"></circle>
        <circle cx="636" cy="498.9" id="2"></circle>
      </svg>
))}
      
    </div>
  );
}

export default RegionsData;
