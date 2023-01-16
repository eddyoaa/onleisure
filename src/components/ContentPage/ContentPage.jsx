import "./ContentPage.css"
import ContentCard from '../ContentCard/ContentCard';
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const ContentPage = ({navType, onNavTypeChange, data, onDataChange, search, onSearchChange}) => {
  const [fetchedData, setFetchedData] = useState("");

  useEffect(() => {
    console.log("hier die Search " + search);
    },[search, onSearchChange]);

                        useEffect(()=> {
                            console.log("Console: fetch API");
                            const fetchPictures = async () => {
                                return( await fetch(`http://localhost:80/search`, {
                                    method: "POST", 
                                    withCredentials: true,    
                                    crossorigin: true, 
                                    body: search
                                  })
                                 
                                  );
                            };
                    
                            fetchPictures()
                                .then(async res => {
                                    console.log("Console: process Data");
                                    console.log(res);
                                    return await res.json();
                                })
                                .then(data => {
                                    console.log("Console: Data:");
                                    console.log(data);
                                    setFetchedData(data);
                                })
                        },[search, onSearchChange]);

  useEffect(() => {
    onNavTypeChange("contentPage");
  });
if(fetchedData!==""){
  const contentItems = fetchedData.map((data, index) => 
  <Link to={{pathname: `/inspect/${data._id}`}} state={data} key={index} style={{color: "black"}}>
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
}
   
  export default ContentPage;