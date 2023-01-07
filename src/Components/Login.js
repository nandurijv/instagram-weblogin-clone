import React from "react";
import Images from "./Images";
const flexStyle={
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap:"50px"
}
function Login() {
  return (
    <>
      <div></div>
      <div>
        <div style={flexStyle}>
          {/* <Images/> */}
          <Images/>
          <div>Login will come here</div>
        </div>
      </div>
      <div style={{padding:"60px"}}>Footer will come here</div>
    </>
  );
}

export default Login;
