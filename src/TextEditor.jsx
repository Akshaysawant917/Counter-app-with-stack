import React, { useState,useEffect } from "react"; 
import { Box } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";



const TextEditor = () => {
  const [content, setContent] = useState("");
  const [isContentChanged, setIsContentChanged] = useState(false);


  const handleChange = (value) => {
    setContent(value);
    setIsContentChanged(true);
    localStorage.setItem('editorContent', value);
  };


  useEffect(() => {
    const storedContent = localStorage.getItem('editorContent');
    if (storedContent) {
      setContent(storedContent);
    }
  }, []);


  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isContentChanged) {
        event.preventDefault();
        event.returnValue = ''; 
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isContentChanged]);

  
  return (
    <Box
      style={{
        height: "50vh",
        width: "50%",
        zIndex: "5",
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        color: "yellow",
        border: "1px solid white",
      }}
    >
      <ReactQuill
        theme="snow" 
        value={content}
        onChange={handleChange}
      />
    </Box>
  );
};

export default TextEditor;
