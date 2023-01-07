import React from 'react'
const box1 = {
    padding:"2rem",
    border:'1px solid black',
    backgroundColor:"#fff",
    height:'300px',
    width:'300px',
}
const box2 = {
    padding:"2rem",
    border:'1px solid black',
    backgroundColor:"white",
    height:'100px',
    width:'100px',
}
const right = {
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'column',
    gap:"2rem"
}
function Form() {
  return (
    <div style={right}>
        <div style={box1}>Form</div>
        <div style={box2}>Form</div>
    </div>
  )
}

export default Form