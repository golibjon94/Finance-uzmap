import React, { useState, useEffect } from "react";
import "./regionsData.css";
import { allDatas } from "../allDatas";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addRegionsInfos} from "../redux/regionsSlice"
import data from "../datas/apidatas.json";

function RegionsData() {
  const [categories, setcategories] = useState([]);
  const { id } = useParams();
  const filteredDatas = allDatas.filter((item) => item.id === id);
 const dispatch = useDispatch()
  useEffect(() => {
    filteredDatas.map((item) => setcategories(item.infos));
  }, []);


const getDatas=(id)=>{
  alert(id)
// const filterData=data.filter(item=>item.id===id)

    // dispatch(addRegionsInfos(filterData))
    // axios.get("https://jsonplaceholder.typicode.com/users")
    // .then(res=>dispatch(addRegionsInfos(res.data)))
    // .catch(err=>console.log(err.message))
}
  return (
    <div>
   
 {filteredDatas.map(itemm=>(
  <svg
        id={itemm.name}
        baseprofile="tiny"
        width="530"
        height="600"
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
