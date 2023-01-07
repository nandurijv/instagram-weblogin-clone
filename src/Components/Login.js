import React from "react";
import Images from "./Images";
import Form from "./Form";
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
          <div><Form/></div>
        </div>
      </div>
      <div style={{padding:"60px"}}>Footer will come here</div>
    </>
  );
}

export default Login;
