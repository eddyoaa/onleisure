import "./ContentPage.css"
import ContentCard from '../ContentCard/ContentCard';
import { useEffect } from "react";

const ContentPage = ({navType, onNavTypeChange}) => {

  useEffect(() => {
    onNavTypeChange("contentPage");
  });

    return ( 
      <div className="app">
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      </div>
     );
  }
   
  export default ContentPage;