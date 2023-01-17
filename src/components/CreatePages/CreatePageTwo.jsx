import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CreatePageTwo = ({navType, onNavTypeChange}) => {

    
    useEffect(() => {
        onNavTypeChange("cardInspectPage");
      });

    return ( 
        <div className="startPage">
        <Link to="/create/3" style={{color: "black"}}>
        <div className="button">
            <Button version="dick" isDisabled={false}>Weiter</Button>
        </div>
        </Link>
        </div>
     );}
 
export default CreatePageTwo;