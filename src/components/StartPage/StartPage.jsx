import "./StartPage.css"
import Button from "../Button/Button";

const StartPage = () => {
    return ( 
        <>
        <div>
            <img src="./Sport.png" className="Sport" alt="Fußball Spielen" width="250" height="250"/>
            <h1 className="Intro">
                Finde deine neue Freizeitaktivität
            </h1>
        </div>
        <div className="Standort">
            <Button version="dick" isDisabled={false}>Standort</Button>
        </div>
        </>
     );
}
 
export default StartPage;