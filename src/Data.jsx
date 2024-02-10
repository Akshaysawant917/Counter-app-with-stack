import React,{useState} from "react";
import { Stack, Box, TextField, Button } from "@mui/material";
const Data = ({formData}) => {
    const [randomNumber, setRandomNumber] = useState(null);
    const generateRandomNumber = () => {
        const num = Math.floor(Math.random() * 10000);
        setRandomNumber(num);
      };
    
  return (
    <Stack
      style={{
        height: "50vh",
        width: "50%",
        zIndex: "5",
        padding: "4vw",
        color: "Black",
        border: "1px solid white",
      }}
    >
      <Box
        sx={{
          bgcolor: "lightblue",
          width: "100%",
          height: "8vh",
          border: "1px solid black",
          margin: "2px",
          padding:"1vw"
        }}
      >
       <p> Adress:{formData.address}, Email: {formData.email}, Phone:{formData.phoneNumber}</p>
      </Box>
      <Box
        sx={{
          bgcolor: "lightblue",
          width: "100%",
          height: "8vh",
          border: "1px solid black",
          margin: "2px",
          fontSize: "1.5vw",
          
        }}
      >
        Enter Name:
        <TextField
          sx={{ bgcolor: "lightblue", width: "70%", height: "20%" }}
          name="Name"
          type="Name"
        />
      </Box>
      <Box
        sx={{
          bgcolor: "lightblue",
          width: "100%",
          height: "8vh",
          border: "1px solid black",
          margin: "2px",
          padding:"1vw"
        }}
      >
        ID:{randomNumber}
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "1vh",
        }}
        onClick={generateRandomNumber}
      >
        Genrate ID
      </Button>
    </Stack>
  );
};

export default Data;
