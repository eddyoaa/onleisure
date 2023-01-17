import "./ContentCard.css"

const ContentCard = ({data}) => {

        return (       
        <div className="card">

            <div className="card-platzhalter">
            
            {/* <img className="card-image">C:\Users\leaze\OneDrive\Desktop\onleisure\src\components\ContentCard\regular-16-9.jfif</img> */}
            <div className="datum-frame">
                <div className="datum"> <p>{data.date}</p> </div>
            </div>

        
            <div className="name">
               <p>{data.title}</p>
               <div className="alter"> <p>{data.age[0]}-{data.age[data.age.length - 1]}</p> </div>
            </div>
            <div className="info">
               <p>{data.description}</p>
            </div>
        </div>
        </div>
        );
}
 
export default ContentCard;