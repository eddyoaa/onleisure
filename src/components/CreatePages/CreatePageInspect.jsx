import "./CreatePages.css"
import "../ContentInspect/ContentInspect.css"
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import newImage from "../../yueying-ni-vDPF4aE-Xno-unsplash.jpg"

const CreatePageInspect = ({navType, onNavTypeChange, createValues, onCreateValuesChange}) => {
    const [toValueCreate, setToValueCreate] = useState(false);

    let data =     {
    adress: 'Musterstraße 12',
    image: newImage,
    title: "Titel",
    city: 'München',
    description: "Lorum und hbahkfbk hbsfkhlblhbf d hbahkfbk hbsfkhlblhbf hbSbf d hbahkfbk hbsfkhlblhbf hbSbf d hbahkfbk hbsfkhlblhbf hbSbf hbSbfshBKB SKdbfKLB flSDBf lBSL so d",
    date: '2001-08-17',
    time: '10:30',
    age: [ '18' ],
    location_Outside: true,
    location_Inside: true,
    eMail: 'eddy.kras@gmail.com',
    telefon: '123456789',
    activity: 'Fußball'};

    console.log("Object" + createValues);
    console.log("String" + JSON.stringify(createValues))

    data = createValues;

    useEffect(() => {
        onNavTypeChange("cardInspectPage");
      });

    console.log("IMAGE" + data.image);

      let ageFormated;
      if(data.age.length===1){
          ageFormated = data.age[0] + " J";
      }
      else {
          ageFormated = data.age[0] + "-" + data.age.at(-1) + " J";
      }

    function datumUmwandler(date){
        const cleanUp = date.replace("\"", "");
        const info = cleanUp.split("-");
        const newDatum=`${info[2]}.${info[1]}.${info[0]}`;

        return newDatum;
    }

    const onSubmit = () => {
        console.log("onsubmit");
        setToValueCreate(true);
        
    }

    return ( 
        <div className="createPages">
            {toValueCreate && <Navigate to="/create/finish"/>}
         <div className="image-wrapper">
                <img className="image" src={data.image} alt="Beispiel Bild"/>
            </div>
            <div className="content">
                <div className="titel">
                    <p>{data.title}</p>
                </div>
                <div className="info-contentInspect">
                    <p>{datumUmwandler(data.date) + " - " + data.time + " Uhr"}</p>
                    <p>{data.adress}</p>
                    
                </div>
                <div className="kategorienLeiste">
                    <p className="kategorie">{data.activity}</p>
                    <p className="kategorie">{ageFormated}</p>
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
        <Link to="/create/finish" style={{color: "black"}} onClick={onSubmit}>
        <div className="button" id="create">
            <Button version="dick" isDisabled={false}>Posten</Button>
        </div>
        </Link>
        </div>
     );}
 
export default CreatePageInspect;
