import "./Navbar.css"
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import logoShort from "../../logo_short.svg"

const Navbar = () => {
    return ( 
        //Navbar search aus
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

        //Navbar search ein
        
     );
}
 
export default Navbar;