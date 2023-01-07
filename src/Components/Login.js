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
      <div style={{padding:"20px"}}>Made with ❤️ by Nanduri Jayant Vishnu</div>
    </>
  );
}

export default Login;
