import React from 'react'
const style={
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding:"30px"
}
function From() {
  return (
    <div style={style}>
        <div style={{fontFamily:"Poppins",color:"rgb(0,0,0,0.5)",fontSize:"0.8rem"}}>from</div>
        <div><img src="./instaMeta.png" alt="" height="30"/></div>
    </div>
  )
}

export default From