import "./ContentPage.css"
import ContentCard from '../ContentCard/ContentCard';
import { useEffect } from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";

const ContentPage = ({navType, onNavTypeChange, data, onDataChange}) => {
  const location = useLocation();
  const searchQuery = location.state;

  console.log("hier die Search" + {searchQuery});

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