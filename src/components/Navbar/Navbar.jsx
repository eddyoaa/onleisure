import "./Navbar.css"
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import ArrowIcon from '@mui/icons-material/KeyboardBackspace';
import logoShort from "../../logo_short.svg";
import LanguageMenu from "../LanguageMenu/LanguageMenu";

const Navbar = ({navType, onNavTypeChange}) => {

    const [isShown, setIsShown] = useState(false);

    const navigate = useNavigate();

    const handleLanguageClick = event => {
        setIsShown(current => !current);
    }

            //Navbar content Seite
    if (navType==="contentPage"){  
        return (
        <>
        <div className="navbar">
            <div className="icon--button">
                <LanguageIcon 
                sx={{ fontSize: 32}} 
                onClick = {handleLanguageClick}
                />
            </div>
            <Link to="/" style={{color: "black"}}>
                <div className="navbar--logo">
                    <img src={logoShort} alt="Navbar logo" width="50px" height="25px"/>
                </div>
            </Link>
            <Link to="/filter" style={{color: "black"}}>
                <div className="icon--button">
                    <SearchIcon sx={{ fontSize: 32}} />
                </div>
            </Link>
        </div>
        <div className="languagemenu">
            {isShown && <LanguageMenu />}
        </div>
        </>
        );
    }
            //Navbar standard (Start Flow)
    else if (navType==="startPage"){
        return (    
            <>   
            <div className="navbar">
                <div className="icon--button" id="language">
                <LanguageIcon 
                    sx={{ fontSize: 32}}
                    onClick = {handleLanguageClick}
                    />
                </div>
                <div className="navbar--logo">
                    <img src={logoShort} alt="Navbar logo" width="50px" height="25px"/>
                </div>
                <div className="icon--button"  id="search">
                <SearchIcon sx={{ color: "white" }}/> 
                </div>

            </div>
            <div className="languagemenu">
                {isShown && <LanguageMenu />}
            </div>
            </>
            );
    }
            //Navbar (cardInspect Seite)
    else if (navType==="cardInspectPage"){
        return (       
            <div className="navbar" id="cardInspectNavbar">
                <div className="icon--button" id="arrow">
                <ArrowIcon 
                    sx={{ fontSize: 32}} 
                    onClick={() => {navigate(-1)}}/>
                </div>
                <Link to="/" style={{color: "black"}}>
                    <div className="navbar--logo">
                        <img src={logoShort} alt="Navbar logo" width="50px" height="25px"/>
                    </div>
                </Link>
                <div className="icon--button"  id="search">
                <SearchIcon sx={{ color: "white" }}/> 
                </div>
            </div>
            );
    }
    
}
 
export default Navbar;