import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LinearProgress } from '@mui/material';

const CreatePageFour = ({navType, onNavTypeChange,progressValue, onProgressValueChange}) => {

    
    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(60);
      });

    return ( 
        <div className="createPages">
        <Link to="/create/5" style={{color: "black"}}>
        <div className="button" id="create">
            <Button version="duenn" isDisabled={false}>Weiter</Button>
        </div>
        </Link>
        </div>
     );}
 
export default CreatePageFour;