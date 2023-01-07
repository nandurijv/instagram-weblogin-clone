import Loader from "./Components/Loader";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Components/Login";
function App() {
  const [count,setCount] = useState(3);

  const handleTimer = ()=>{
    setCount(prev=>prev-1);
  }
  useEffect(() => {
    if(count!==0){
    let timer = setInterval(()=>{handleTimer();},1000);
    return () => {
      clearInterval(timer);
    }}
  })
  
  return (
    <div className="App">
      <div></div>
      {count?<Loader/>:""}
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              !count&&<Login/>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
