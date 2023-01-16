import "./StartPage.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import sportImage from "../../sport.png"

const StartPageThree = ({navType, onNavTypeChange}) => {

    useEffect(() => {
        onNavTypeChange("startPage");
      });

        return ( 
            
            <div className="startPage">
            <img
            src={sportImage}
            className="playerOne"/>
                         <h1 className="pageThree">
                            Finde deine neue Freizeitaktivität
                        </h1>
                <div className="buttons--wrapper">
                        <Link to="/content" style={{color: "black"}}>
                        <div className="buttons">
                            <Button version="dick" isDisabled={false}>Suchen</Button>
                        </div>
                        </Link>
                        <Link to="/create/1" style={{color: "black"}}>
                        <div className="buttons">
                            <Button version="dick" isDisabled={false}>Erstellen</Button>
                        </div>
                        </Link>
                        </div>
            </div>
        );
        }
    

 
export default StartPageThree;