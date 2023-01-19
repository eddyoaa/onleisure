import "./CreatePages.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const CreatePageOne = ({navType, onNavTypeChange, progressValue, onProgressValueChange}) => {

    
    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(0);
      });

    return ( 
        <div className="createPages">
            
            <h3 className="text-one">
                Lade hier deine Fotos hoch
            </h3>

            <div className="image-frame">
                    <div className="icon-image">
                    <AddPhotoAlternateIcon 
                        sx={{ fontSize: 92}} 
                        /*onClick={() => {navigate(-1)}}*//>
                    </div>
            </div>
            <Link to="/create/2" style={{color: "black"}}>
                <div className="buttonCreate1" id="create">
                    <Button version="dick" isDisabled={false}>Weiter</Button>
                </div>
            </Link>
        </div>
     );}
 
export default CreatePageOne;