import "./StartPage.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
//import morphAnimation from "../../lottiefiles/morphing animation.json"

const StartPageOne = ({navType, onNavTypeChange}) => {

    
    // useEffect(() => {
    //     if(navType!=="startPage"){
    //     onNavTypeChange("startPageOne");}
    //   });

    return ( 
        <div className="startPage">
        <div>
            {/* <Player
            src={morphAnimation}
            className="playerOne"
            autoplay
            loop/> */}
             <h1 className="pageOne">
                Finde deine neue Freizeitaktivität
            </h1>
        </div>
        <Link to="/standort" style={{color: "black"}}>
            <div className="buttonStart">
                <Button version="dick" isDisabled={false}>Starten</Button>
            </div>
        </Link>
        </div>
     );}
 
export default StartPageOne;