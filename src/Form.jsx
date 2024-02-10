import React, { useState } from "react";
import {  TextField, Button, Stack } from "@mui/material";

const Form = ({handleChange,handleSubmit,formData}) => {
  
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
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{  bgcolor: "lightblue",
          width: "100%",
          height: "8vh",
          border: "1px solid black",
          margin: "2px",}}
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
         sx={{  bgcolor: "lightblue",
         width: "100%",
         height: "8vh",
         border: "1px solid black",
         margin: "2px",}}
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          sx={{  bgcolor: "lightblue",
          width: "100%",
          height: "8vh",
          border: "1px solid black",
          margin: "2px",}}
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
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
        >
          Save
        </Button>
      </form>
    </Stack>
  );
};

export default Form;
