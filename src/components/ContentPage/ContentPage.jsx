import "./ContentPage.css"
import ContentCard from '../ContentCard/ContentCard';
import { useEffect } from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";

const ContentPage = ({navType, onNavTypeChange, data, onDataChange, search, onSearchChange}) => {
  const location = useLocation();
  const searchQuery = location.state;

  useEffect(() => {
    console.log("hier die Search " + search);
    },[search, onSearchChange]);

  const db = [{title:"Eins", id: "1"}, {title: "zwei", id: "2"}];

  useEffect(() => {
    onNavTypeChange("contentPage");
  });

  const contentItems = db.map((data, index) => 
  <Link to={{pathname: `/inspect/${data.id}`}} state={data} key={index} style={{color: "black"}}>
    <ContentCard 
      data = {data}/>
  </Link>
  );

    return ( 
      <div className="contentPage">
        {contentItems}
      </div>
     );
  }
   
  export default ContentPage;