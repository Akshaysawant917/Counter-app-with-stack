// src/App.jsx
import React, { useState} from "react";
import { useTransition, animated } from "react-spring";
import TextEditor from "./TextEditor";
import Form from "./Form";
import Data from "./Data";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, Box, Container, Stack} from "@mui/material";


function App() {
  const [count, setCount] = useState(0);
  const [boxes, setBoxes] = useState([]);


  const DecreaseCount=()=>{
    if(count>0){  setCount(count-1)
      const updatedBoxes = [...boxes];  
      // console.log(updatedBoxes);
        updatedBoxes.pop();
        setBoxes(updatedBoxes);}
  

  }
  const IncreaseCount=()=>{
    setCount(count+1);
    setBoxes(prevBoxes => [
      ...prevBoxes,
      { id: prevBoxes.length }
    ]);
 
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


  const [formData, setFormData] = useState({
    address: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
  
   
      <Container maxWidth="xl" style={{ display:"flex",flexWrap:"wrap",width:"100vw" ,height:"auto",padding:"0px",backgroundColor:"black",margin:"0px"}}>
        <Box style={{height:"50vh",width:"50%",zIndex:"5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent: "center",padding:"0px",color:"yellow",border:"1px solid white"}}>
        <Box><h1>Count is {count}</h1></Box>
      <Box sx={{display:"flex",'@media (max-width: 600px)': {
          flexDirection:"column",
          flexWrap:"wrap"
        },}}> 
        <Button variant="contained" color="primary" size="small" style={{ margin: "2px" }}  endIcon={<RemoveIcon />} onClick={
          DecreaseCount
        }>
          Decrease
        </Button>
        <Button variant="contained" color="primary"size="small" style={{ margin: "2px" }} endIcon={<ClearIcon />}onClick={
          ResetCount
        }>
          Reset
        </Button>
        <Button variant="contained" color="primary"size="small" style={{ margin: "2px" }} endIcon={<AddIcon />} onClick={
          IncreaseCount
        }>
          Increase
        </Button> 
        </Box>
        </Box>

        
        <TextEditor/>
        <Data formData={formData}/>
        <Form handleChange={handleChange} handleSubmit={handleSubmit}formData={formData}/>
        
      
        
        <Stack style={{position:"absolute",alignItems:"center", flexDirection:"column-reverse",height:"100%",width:"100%",}}>
        {transitions((style, item) =>
          item && (
            <animated.div key={item.id} style={{ ...style}}>
              <Box style={{ backgroundColor: "white", width: "85vw", height: "30px", margin: "5px", borderRadius: 8 }}></Box>
            </animated.div>
          )
        )}
     </Stack>
      </Container>
     

  );
}

export default App;

