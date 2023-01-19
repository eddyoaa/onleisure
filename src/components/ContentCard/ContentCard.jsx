import "./ContentCard.css"

const ContentCard = ({data}) => {
        let descriptionTooLong="";
        let ageFormated;

        if(data.age.length===1){
            ageFormated = data.age[0] + " J";
        }
        else {
            ageFormated = data.age[0] + "-" + data.age.at(-1) + " J";
        }

        if(data.description.length>140){
        descriptionTooLong="...";
        }

        function datumUmwandler(date){
            const info = date.split("-");
            const newDatum=`${info[2]}.${info[1]}.${info[0]}`;
    
            return newDatum;
        }
        return (       
        <div className="card">

            <div className="card-platzhalter">
            
            {/* <img className="card-image">C:\Users\leaze\OneDrive\Desktop\onleisure\src\components\ContentCard\regular-16-9.jfif</img> */}
            <div className="datum-frame">
                <div className="datum"> <p>{datumUmwandler(data.date) + " - " + data.time + " Uhr"}</p> </div>
            </div>

        
            <div className="name">
               <p>{data.title}</p>
               <div className="alter-text">
                 <p>{ageFormated}</p> </div>
            </div>
            <div className="info">
               <p>{data.description.substring(0, 140) + descriptionTooLong}</p>
            </div>
        </div>
        </div>
        );
}
 
export default ContentCard;