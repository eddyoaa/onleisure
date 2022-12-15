import "./ContentPage.css"
import logoShort from "../../logo_short.svg"

const Content_page = () => {
   
        return (       
        <div className="content--page">
            {/* <img className="card-image">C:\Users\leaze\OneDrive\Desktop\onleisure\src\components\ContentCard\regular-16-9.jfif</img> */}
            <div className="top--bar">
            
            <div className="contentpage--logo">
                <img src={logoShort} alt="Navbar logo" width="50px" height="25px"/>
            </div>

            {/* <div className="arrow_icon">
            </div> */}
            
            </div>

            <div className = "Platzhalter"></div>
            {/* <img className="content--image"> 
            </img> */}

            <div className="frame">
           

            <div className="content--frame">
            

            <p className="name">Fußball...</p>

            <p className="date">Datum...</p>

           <p className="time">11:11</p>

            <p className="adress">Blablastraße 11</p>

            <div className="filterbox">
            <p className="filterbox--text">Outdoor</p>
            </div>

        </div>
        </div>
        </div>
        );
}

 
export default Content_page;