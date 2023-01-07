import React from 'react'
const box1 = {
    padding:"1rem",
    border:'2px solid #eaeaea',
    backgroundColor:"#fff",
    width:'300px',
    height:"350px",
    display:"flex",
    flexDirection:'column',
    justifyContent:"space-around",
    alignItems:"center",
    gap:"0.5rem"
}
const box2 = {
    padding:"2rem",
    fontSize:"14px",
    border:'2px solid #eaeaea',
    backgroundColor:"white",
    width:'250px',
    textAlign:"center",
    fontWeight:"500"
}
const right = {
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'column',
    gap:"1.2rem"
}
const button = {
    backgroundColor:"#4bb4f8",
    border:"1px solid",
    minWidth:"75%",
    borderRadius:"10px",
    padding:"0.6rem",
    color:"white",
    fontFamily:"Poppins",
    fontWeight:"600",
    cursor:"pointer",
    marginTop:"1.2rem"
}
function Form() {
  return (
    <div style={right}>
        <div style={box1}>
            <div style={{fontSize:"50px",fontFamily:"Cursive",marginBottom:"2rem",letterSpacing:"-5px"}}><b>Instagram</b></div>
            <input type="text" htmlFor="username" placeholder="Phone number, username or email" style={{width:"75%",padding:"0.6rem",fontSize:"12px",border:"1px solid",borderColor:"rgb(104,104,104,0.5)",backgroundColor:"#fafafa",borderRadius:"5px",outline:"none"}}/>
            
            <input type="password" htmlFor="username" placeholder="Password" style={{width:"75%",padding:"0.6rem",fontSize:"12px",border:"1px solid ",borderColor:"rgb(104,104,104,0.5)",backgroundColor:"#fafafa",borderRadius:"5px",outline:"none"}}/>

            <button style={button}>Log in</button>
            <div style={{display:"flex",alignItems: "center",justifyContent:"center",gap:"0.5rem",fontFamily:"Poppins",color:"gray",fontWeight:"500"}} ><div style={{width:"50px",border:"1px solid #dbdbdb",height:"0"}}></div>OR<div style={{width:"50px",border:"1px solid #dbdbdb",height:"0"}}></div></div>
            <div style={{color:"#385185"}}><b>Login with Facebook</b></div>
            <div style={{fontSize:'12px'}}>Forgot password</div>

        </div>
        <div style={box2}>Don't have an account?<span style={{color:"#0095f6",fontSize:"14px"}} ><b>Sign Up</b></span></div>
        <div style={{fontSize:"14px",fontWeight:"500"}}>Get the App.</div>
        <div style={{display:"flex",alignItems:"center",justifycontent:"center",gap:"2rem"}}>
            <img src="/downApple.png" height="40" alt=""/>
            <img src="/downPlay.png" height="40" alt=""/>
        </div>
    </div>
  )
}

export default Form