import "./ContentPage.css"
import ContentCard from '../ContentCard/ContentCard';
import { useEffect, useState } from "react";
import {Link, useNavigate, useLocation} from "react-router-dom";

const ContentPage = ({navType, onNavTypeChange, data, onDataChange, search, onSearchChange}) => {
  const location = useLocation();
  const searchQuery = location.state;

  const [fetchedData, setFetchedData] = useState("");

  console.log("hier die Search" + {searchQuery});

//   useEffect(() => {
//                         fetch('http://localhost:80/offers')
//                         .then(res => {
//                             return res.json();
//                         })
//                         .then(data =>{
//                             console.log(data);
//                             db=data;
//                         })
//                         });

                        useEffect(()=> {
                            console.log("Console: fetch API");
                            const fetchPictures = async () => {
                                return( await fetch(`http://localhost:80/offers`, {
                                    method: "GET", 
                                    withCredentials: true,    
                                    crossorigin: true      
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