// src/App.jsx
import React, { useState} from "react";
import { useTransition, animated } from "react-spring";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { Button,Box, Container, Stack} from "@mui/material";
function App() {
  const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState([]);


  const DecreaseCount=()=>{
    if(count>0){  setCount(count-1)
      const updatedBoxes = [...boxes];  
      console.log(updatedBoxes);
        updatedBoxes.pop();
        setBoxes(updatedBoxes);}
  

  }
  const IncreaseCount=()=>{
    setCount(count+1);
    setBoxes(prevBoxes => [
      ...prevBoxes,
      { id: prevBoxes.length }
    ]);
    if(count==11){
      prompt("Stack is full")
    }
  }


  const ResetCount=()=>{
    setCount(0);
    setBoxes([])
  }
 
  const transitions = useTransition(boxes, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-40px,0)" }
  });
  return (
  
    <div>
      <Container maxWidth="xl" style={{ display:"flex",flexDirection:"column" , alignItems:"center",backgroundColor:"pink",padding:"0px"}}>
        <Box><h1>Count is {count}</h1></Box>
       <Box > 
        <Button variant="contained" color="primary" style={{ margin: "8px" }}  endIcon={<RemoveIcon />} onClick={()=>{
          DecreaseCount()
        }}>
          Decrease
        </Button>
        <Button variant="contained" color="primary" style={{ margin: "8px" }} endIcon={<ClearIcon />}onClick={()=>{
          ResetCount()
        }}>
          Reset
        </Button>
        <Button variant="contained" color="primary" style={{ margin: "8px" }} endIcon={<AddIcon />} onClick={()=>{
          IncreaseCount()
        }}>
          Increase
        </Button> 
        </Box>
        <Stack style={{alignItems:"center", flexDirection:"column-reverse",height:"78vh",width:"100%",backgroundColor:"black"}}>
        {transitions((style, item) =>
          item && (
            <animated.div style={{ ...style}}>
              <Box style={{ backgroundColor: "blue", width: "95vw", height: "30px", margin: "8px", borderRadius: 8 }}></Box>
            </animated.div>
          )
        )}
     </Stack>
      </Container>
     
    </div>
  );
}

export default App;
