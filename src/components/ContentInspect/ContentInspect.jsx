import "./ContentInspect.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const ContentInspect = ({navType, onNavTypeChange}) => {
    const location = useLocation();
    const data = location.state;
    console.log({data});
    useEffect(() => {
        onNavTypeChange("cardInspectPage");
      });

    return ( 
        <div className="inspectPage">
            <div className="image-wrapper">
                <img className="image" src="https://th.bing.com/th/id/OIP.-XS8esOqgS6IksKfObYnkAHaEK?pid=ImgDet&rs=1" alt="Beispiel Bild"/>
            </div>
            <div className="content">
                <div className="titel">
                    <p>{data.title}</p>
                </div>
                <div className="info-contentInspect">
                    <p>{data.date}</p>
                    <p>{data.time}Uhr</p>
                    <p>{data.adress}</p>
                    
                </div>
                <div className="kategorienLeiste">
                    <p className="kategorie">{data.activity}</p>
                    <p className="kategorie">{data.age[1]}</p>
                    {(data.location_Outside) && <p className="kategorie">Outdoor</p>}
                    {(data.location_Inside) && <p className="kategorie">Indoor</p>}
                </div>
                <p className="infotext">{data.beschreibung}</p>
                <div className="kontakt">
                    <LocalPhoneIcon sx={{ fontSize: 32}}/>
                    <p className="kontaktText">0162/823193223</p>
                </div>
                <div className="kontakt">
                    <EmailIcon sx={{ fontSize: 32}}/>
                    <p className="kontaktText">max.mustermann@gmx.de</p>
                </div>
            </div>
        </div>
     );
}
 
export default ContentInspect;