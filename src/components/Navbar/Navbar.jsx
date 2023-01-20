import "./Navbar.css"
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import ArrowIcon from '@mui/icons-material/KeyboardBackspace';
import logoShort from "../../logo_short.svg";
import LanguageMenu from "../LanguageMenu/LanguageMenu";
import { Player } from "@lottiefiles/react-lottie-player";
//import logoAnimation from "../../lottiefiles/logo animation.json"
import { LinearProgress } from "@mui/material";

const Navbar = ({navType, onNavTypeChange, progressValue}) => {
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
            <div className="topbar">
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
         {isShown && <div className="languagemenu"> <LanguageMenu /> </div>}
        </div>
        </>
        );
    }
    else if (navType==="filterPage"){  
        return (
        <>
        <div className="navbar">
            <div className="topbar">
                <div className="icon--button">
                    <LanguageIcon sx={{ color: "white" }}/>
                </div>
                <Link to="/" style={{color: "black"}}>
                    <div className="navbar--logo">
                        <img src={logoShort} alt="Navbar logo" width="50px" height="25px"/>
                    </div>
                </Link>
                <Link to="/content" style={{color: "black"}}>
                    <div className="icon--button">
                        <SearchIcon 
                        sx={{ fontSize: 32}} />
                    </div>
                </Link>
            </div>
        </div>
        </>
        );
    }
            //Navbar standard (Start Flow)
    else if (navType==="startPage"){
        return (    
            <>   
            <div className="navbar">
                <div className="topbar">
                    <div className="icon--button" id="language">
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
                    <div className="icon--button"  id="search">
                    <SearchIcon sx={{ color: "white" }}/> 
                    </div>

                </div>
                {isShown && <div className="languagemenu"> <LanguageMenu /> </div>}
            </div>
            </>
            );
    }
    // else if (navType==="startPageOne"){
    //     return (    
    //         <>   
    //         <div className="navbar">
    //             <div className="topbar" id="startPageOne">
    //                 <div className="icon--button" id="language">
    //                 <LanguageIcon 
    //                     sx={{ fontSize: 32}}
    //                     onClick = {handleLanguageClick}
    //                     />
    //                 </div>
    //                 <Link to="/" style={{color: "black"}}>
    //                 <div className="navbar--logo"> 
    //                         <Player className="navbar-player"
    //                             autoplay={true}
    //                             onEvent={event => {
    //                                 if (event === 'complete') onNavTypeChange("startPage"); // check event type and do something
    //                               }}
    //                             src={logoAnimation}
    //                             />
    //                 </div>
    //                 </Link>
    //                 <div className="icon--button"  id="search">
    //                 <SearchIcon sx={{ color: "white" }}/> 
    //                 </div>

    //             </div>
    //             {isShown && <div className="languagemenu"> <LanguageMenu /> </div>}
    //         </div>
    //         </>
    //         );
    // }
            //Navbar (cardInspect Seite)
    else if (navType==="cardInspectPage"){
        return (       
            <div className="navbar">
                <div className="topbar" id="cardInspectNavbar">
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
            </div>
            );
    }
    else if (navType==="createPage"){
        return (  
            <>  
            <div className="navbar">
                <div className="topbar" id="cardInspectNavbar">
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
            </div>
            <div className="progressBar">
                <LinearProgress variant="buffer" value={progressValue} valueBuffer={progressValue+20} />
            </div>
            </>   
            );
    }
    
}
 
export default Navbar;