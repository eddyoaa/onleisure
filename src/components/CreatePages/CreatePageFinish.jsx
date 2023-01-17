import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import mediImage from "../../mediImage.png"

const CreatePageFinish = ({navType, onNavTypeChange}) => {

    
    useEffect(() => {
        onNavTypeChange("cardInspectPage");
      });

    return ( 
        <div className="createPages">
        <div className="contentCreateFinish">
        <img
            src={mediImage}
            className="mediImage"/>
             <h1 className="createFininsh">
             Deine Anzeige wurde Erfolgreich gepostet.
            </h1>
        </div>
        <Link to="/" style={{color: "black"}}>
        <div className="button">
            <Button version="dick" isDisabled={false}>Weiter</Button>
        </div>
        </Link>
        </div>
     );}
 
export default CreatePageFinish;