import "./ContentCard.css"

const ContentCard = ({data}) => {
   
        return (       
        <div className="card">

            <div className="card-platzhalter">
            
            {/* <img className="card-image">C:\Users\leaze\OneDrive\Desktop\onleisure\src\components\ContentCard\regular-16-9.jfif</img> */}
            <div className="datum-frame">
                <div className="datum"> <p>Datum...</p> </div>
            </div>

        
            <div className="name">
               <p>{data.title}</p>
               <div className="alter"> <p>0-99</p> </div>
            </div>
            <div className="info">
               <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
            </div>
        </div>
        </div>
        );
}
 
export default ContentCard;