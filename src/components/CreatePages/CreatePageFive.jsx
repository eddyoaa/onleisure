import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LinearProgress } from '@mui/material';

const CreatePageFive = ({navType, onNavTypeChange, progressValue, onProgressValueChange}) => {

    
    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(80);
      });

    return ( 
        <div className="createPages">
        <Link to="/create/inspect" style={{color: "black"}}>
        <div className="button">
            <Button version="dick" isDisabled={false}>Weiter</Button>
        </div>
        </Link>
        </div>
     );}
 
export default CreatePageFive;