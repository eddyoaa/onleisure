import "./Navbar.css"
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import ArrowIcon from '@mui/icons-material/KeyboardBackspace';
import logoShort from "../../logo_short.svg"

const Navbar = ({navType, onNavTypeChange}) => {
            //Navbar standard (Start Flow)
    if (navType==="startPage"){  
        return (       
        <div className="navbar">
            <div className="icon--button">
            <LanguageIcon sx={{ fontSize: 32}}/>
            </div>
            <div className="navbar--logo">
                <img src={logoShort} alt="Navbar logo" width="50px" height="25px"/>
            </div>
            <div className="icon--button">
            <SearchIcon sx={{ fontSize: 32}}/>
            </div>
        </div>
        );
    }
            //Navbar (content Seite)
    else if (navType==="contentPage"){
        return (       
            <div className="navbar">
                <div className="icon--button" id="language">
                <LanguageIcon sx={{ fontSize: 32}}/>
                </div>
                <div className="navbar--logo">
                    <img src={logoShort} alt="Navbar logo" width="50px" height="25px"/>
                </div>
                <div className="icon--button"  id="search">
                <SearchIcon sx={{ color: "white" }}/> 
                </div>
            </div>
            );
    }
            //Navbar (cardInspect Seite)
    else if (navType==="cardInspectPage"){
        return (       
            <div className="navbar" id="cardInspectNavbar">
                <div className="icon--button" id="arrow">
                <ArrowIcon sx={{ fontSize: 32}}/>
                </div>
                <div className="navbar--logo">
                    <img src={logoShort} alt="Navbar logo" width="50px" height="25px"/>
                </div>
                <div className="icon--button"  id="search">
                <SearchIcon sx={{ color: "white" }}/> 
                </div>
            </div>
            );
    }
    
}
 
export default Navbar;