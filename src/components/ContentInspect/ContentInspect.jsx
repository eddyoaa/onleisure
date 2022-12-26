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
                    <p>24.12.2022 - 15Uhr</p>
                    <p>Schwere-Reiter-Str. 13, 80637</p>
                </div>
                <div className="kategorienLeiste">
                    <p className="kategorie">Fußball</p>
                    <p className="kategorie">18-26 J</p>
                    <p className="kategorie">Outdoor</p>
                </div>
                <p className="infotext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et </p>
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