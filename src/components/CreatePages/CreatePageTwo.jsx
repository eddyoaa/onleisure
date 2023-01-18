import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LinearProgress } from '@mui/material';
import * as Yup from 'yup';

const CreatePageTwo = ({navType, onNavTypeChange, progressValue, onProgressValueChange}) => {
    

    
    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(20);
      });

    return ( 
        <div className="createPages">


        <Link to="/create/3" style={{color: "black"}}>
        <div className="button">
            <Button version="dick" isDisabled={false}>Weiter</Button>
        </div>
        </Link>
        </div>
     );}
 
export default CreatePageTwo;