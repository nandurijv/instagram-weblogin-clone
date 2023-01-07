import React, { useEffect, useState } from "react";
import "./Images.css";

function Images() {
    const imageArray = ['instashot1.png','instashot2.png','instashot3.png'];
    const [imageIndex,setImageIndex] = useState(0);
    useEffect(()=>{
        let timer = setInterval(()=>{
            setImageIndex(prev=>(prev+1)%3);
        },5000);
        return ()=>{
            clearInterval(timer);
        }
    })
  return (
    <div style={{position:"relative"}}>
    <img className="backImg" src={`/${imageArray[2]}`} height="550" alt="" style={{position: 'absolute',left:"-45%",top:"-3%",boxShadow:"0 30px 0 #000",position:"absolute"}} />
      <div className="imageStyles">
        <img src={`/${imageArray[imageIndex]}`} height="560" alt="" />
      </div>
    </div>
  );
}

export default Images;
