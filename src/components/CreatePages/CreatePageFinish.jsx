import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import mediImage from "../../mediImage.png"

const CreatePageFinish = ({navType, onNavTypeChange, createValues, onCreateValuesChange}) => {
    console.log("FINISH " + createValues);
    console.log("FINISH " + JSON.stringify(createValues));
    console.log("FINISH" + createValues.image);
    
    useEffect(() => {
        onNavTypeChange("cardInspectPage");
      });

      useEffect(()=> {
        console.log("Console: fetch API");
        const fetchPictures = async () => {
            return( await fetch(`https://onleisure.onrender.com/create`, {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                withCredentials: true,    
                crossorigin: true, 
                body: JSON.stringify(createValues)
              })
             
              );
        };

        fetchPictures()
            .then(async res => {
                console.log("Console: process Data");
                console.log(res);
                return await res.json();
            })
            .then(data => {
                console.log("Console: Data:");
                console.log(data);
            })
    },[createValues, onCreateValuesChange]);

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
        <div className="buttondone" id="create">
            <Button version="dick" isDisabled={false}>Weiter</Button>
        </div>
        </Link>
        </div>
     );}
 
export default CreatePageFinish;