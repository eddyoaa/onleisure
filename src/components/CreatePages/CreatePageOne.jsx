import "./CreatePages.css"
import Button from "../Button/Button";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Navigate, Link } from "react-router-dom";
import {React, useState ,useEffect} from "react";
import "./image.css";



const CreatePageOne = ({navType, onNavTypeChange, progressValue, onProgressValueChange, createValues, onCreateValuesChange}) => {
    const [image, setImage] = useState("");
    const [toValueCreate, setToValueCreate] = useState(false);

    useEffect(() => {
        onNavTypeChange("createPage");
        onProgressValueChange(0);
      
      });

    const onSubmit = () => {
        console.log("onsubmit");
        const formData = new FormData();
        formData.append("image", image)
        onCreateValuesChange({image:image});
        setToValueCreate(true);}

    const handleChange = (e) => {
        console.log(e.target.files);
        setImage(e.target.files[0]);
      }
    return ( 
        <div className="createPages">
        {toValueCreate && <Navigate to="/create/2"/>}
            <h3 className="text-one">
                Lade hier deine Fotos hoch
            </h3>

            <div className="image-frame">
                <div id="upload-box">
                    <input type="file" onChange={handleChange} />

                    {image && <div><img className="uploadedpic" src={URL.createObjectURL(image)} alt={image.name}/> </div>}
                </div>

                <div className="icon-image">
                    <AddPhotoAlternateIcon 
                        sx={{ fontSize: 92}} 
                        /*onClick={() => {navigate(-1)}}*//>
                </div>
            </div>
                <div className="buttonCreate1" id="create" onClick={onSubmit}>
                    <Button version="dick" isDisabled={false}>Weiter</Button>
                </div>
        </div>
     );
    }
export default CreatePageOne;