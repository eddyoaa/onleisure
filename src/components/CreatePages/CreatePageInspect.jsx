import "./CreatePages.css"
import "../ContentInspect/ContentInspect.css"
import Button from "../Button/Button";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


const CreatePageInspect = ({navType, onNavTypeChange, createValues}) => {
    const data =     {adress: 'Musterstraße 12',
    title: "Titel",
    city: 'München',
    description: "Lorum und hbahkfbk hbsfkhlblhbf d hbahkfbk hbsfkhlblhbf hbSbf d hbahkfbk hbsfkhlblhbf hbSbf d hbahkfbk hbsfkhlblhbf hbSbf hbSbfshBKB SKdbfKLB flSDBf lBSL so d hbahkfbk hbsfkhlblhbf hbSbf d hbahkfbk hbsfkhlblhbf hbSbf hbSbfshBKB SKdbfKLB flSDBf lBSL so d hbahkfbk hbsfkhlblhbf hbSbf d hbahkfbk hbsfkhlblhbf hbSbf hbSbfshBKB SKdbfKLB flSDBf lBSL so d hbahkfbk hbsfkhlblhbf hbSbf d hbahkfbk hbsfkhlblhbf hbSbf hbSbfshBKB SKdbfKLB flSDBf lBSL so d hbahkfbk hbsfkhlblhbf hbSbf d hbahkfbk hbsfkhlblhbf hbSbf hbSbfshBKB SKdbfKLB flSDBf lBSL so",
    date: '2001-08-17',
    time: '10:30',
    age: [ '18' ],
    location_Outside: true,
    location_Inside: true,
    eMail: 'eddy.kras@gmail.com',
    telefon: '123456789',
    activity: 'Fußball'};

    useEffect(() => {
        onNavTypeChange("cardInspectPage");
      });

    function datumUmwandler(date){
        const info = date.split("-");
        const newDatum=`${info[2]}.${info[1]}.${info[0]}`;

        return newDatum;
    }

    return ( 
        <div className="createPages">
         <div className="image-wrapper">
                <img className="image" src="https://th.bing.com/th/id/OIP.-XS8esOqgS6IksKfObYnkAHaEK?pid=ImgDet&rs=1" alt="Beispiel Bild"/>
            </div>
            <div className="content">
                <div className="titel">
                    <p>{data.title}</p>
                </div>
                <div className="info-contentInspect">
                    <p>{datumUmwandler(data.date) + " - " + data.time + "Uhr"}</p>
                    <p>{data.adress}</p>
                    
                </div>
                <div className="kategorienLeiste">
                    <p className="kategorie">{data.activity}</p>
                    <p className="kategorie">{data.age[0] + "-" + data.age.at(-1) + " J"}</p>
                    {(data.location_Outside) && <p className="kategorie">Outdoor</p>}
                    {(data.location_Inside) && <p className="kategorie">Indoor</p>}
                </div>
                <p className="infotext">{data.description}</p>
                <p className="kontaktÜberschrift">Kontakt</p>
                <div className="kontakt">
                    <LocalPhoneIcon sx={{ fontSize: 32}}/>
                    <p className="kontaktText">{data.telefon}</p>
                </div>
                <div className="kontakt">
                    <EmailIcon sx={{ fontSize: 32}}/>
                    <p className="kontaktText">{data.eMail}</p>
                </div>
            </div>
        <Link to="/create/finish" style={{color: "black"}}>
        <div className="button" id="create">
            <Button version="duenn" isDisabled={false}>Posten</Button>
        </div>
        </Link>
        </div>
     );}
 
export default CreatePageInspect;
