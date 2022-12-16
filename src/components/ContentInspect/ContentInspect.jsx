import "./ContentPage.css"
import logoShort from "../../logo_short.svg"

const ContentPage = () => {
   
        return (       
        <div className="content--page">
            {/* <img className="card-image">C:\Users\leaze\OneDrive\Desktop\onleisure\src\components\ContentCard\regular-16-9.jfif</img> */}

            <div className = "Platzhalter">
                <img src="https://images.unsplash.com/photo-1670787325681-cc481822bbe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60" alt="Beispiel Bild"/>
            </div>

            <div className="frame">
            
                <div className="name-wrapper">
                <p className="name">Fußball...</p>
                </div>

                <div className="info">
                    <p className="infoText">Datum-Uhrzeit</p>

                    <p className="infoText">Blablastraße 11</p>
                </div>

                <div className="filterbox">
                    <p className="filterbox--text">Outdoor</p>
                </div>

                <div className="infoText-wrapper">
                <p className="infoText">Ich bin ein Infotext...</p>
                </div>

                <div className="kontakt">
                    <div className="telefon">
                        <p className="kontaktText">Telefonnummer</p>
                    </div>
                    <div className="email">
                        <p className="kontaktText">Telefonnummer</p>
                    </div>
                </div>
            </div>
        </div>
        );
}

 
export default ContentPage;