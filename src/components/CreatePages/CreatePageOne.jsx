import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LinearProgress } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {useState} from 'react';
import React from "react";
import FileUpload from "./image.jsx"
import { Navigate } from "react-router-dom";


const CreatePageOne = ({navType, onNavTypeChange, progressValue, onProgressValueChange, createValues, onCreateValuesChange}) => {
    const [file, setFile] = useState("");
    const [toValueCreate, setToValueCreate] = useState(false);

      // State to store uploaded file
    
      
      // Handles file upload event and updates state
      
        // Add code here to upload file to server
        // ...
      
   

    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(0);
      
      });

    function onSubmit(){
        onCreateValuesChange({image: file});
        setToValueCreate(true);
    }

    return ( 
        <div className="createPages">
                        {toValueCreate && <Navigate to="/create/2"/>}
            <h3 className="text-one">
                Lade hier deine Fotos hoch
            </h3>

            <div className="image-frame">
            <div>
           <FileUpload
           file = {file}
           onFileChange={setFile}/>
            </div>

                    <div className="icon-image">
                    <AddPhotoAlternateIcon 
                        sx={{ fontSize: 92}} 
                        /*onClick={() => {navigate(-1)}}*//>
                    </div>
            </div>
            <Link to="/create/2" style={{color: "black"}}>
                <div className="buttonCreate" id="create">
                    <Button onSubmit={onSubmit} version="dick" isDisabled={false}>Weiter</Button>
                </div>
            </Link>
        </div>
     );}
    

 
export default CreatePageOne;





/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */



/**
 * Component to display thumbnail of image.
 */



