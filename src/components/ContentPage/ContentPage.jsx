import "./ContentPage.css"
import ContentCard from '../ContentCard/ContentCard';
import { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";

const ContentPage = ({navType, onNavTypeChange}) => {

  useEffect(() => {
    onNavTypeChange("contentPage");
  });

    return ( 
      <div className="app">
      <Link to="/inspect" style={{color: "black"}}>
        <ContentCard />
      </Link>
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
     );
  }
   
  export default ContentPage;