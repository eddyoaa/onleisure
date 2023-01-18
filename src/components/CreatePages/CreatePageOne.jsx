import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LinearProgress } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const CreatePageOne = ({navType, onNavTypeChange, progressValue, onProgressValueChange}) => {

    
    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(0);
      });

    return ( 
        <div className="createPages">
            
            <h2 className="text-one">
                Lade hier deine Fotos hoch
            </h2>

            <div className="image-frame">
                    <div className="icon-image">
                    <AddPhotoAlternateIcon 
                        sx={{ fontSize: 92}} 
                        /*onClick={() => {navigate(-1)}}*//>
                    </div>
            </div>
            <Link to="/create/2" style={{color: "black"}}>
                <div className="button" id="create">
                    <Button version="duenn" isDisabled={false}>Weiter</Button>
                </div>
            </Link>
        </div>
     );}
 
export default CreatePageOne;