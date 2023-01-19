import "./ContentPage.css"
import ContentCard from '../ContentCard/ContentCard';
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import loadingAnimation from "../../lottiefiles/loading animation.json"
import { Player } from '@lottiefiles/react-lottie-player';

const ContentPage = ({navType, onNavTypeChange, data, onDataChange, search, onSearchChange}) => {
  const [fetchedData, setFetchedData] = useState("");

  useEffect(() => {
    console.log("hier die Search " + search);
    },[search, onSearchChange]);

                        useEffect(()=> {
                            console.log("Console: fetch API");
                            const fetchPictures = async () => {
                                return( await fetch(`https://onleisure.onrender.com/search`, {
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
if(fetchedData==""){
  return(
    <div className="loadingContent">
      <Player
            src={loadingAnimation}
            className="loadingPlayer"
            autoplay
            loop/>
            <p className="loadingText"> Wird geladen...</p>
    </div>
  )
}
else{
  console.log("FetchedData" + fetchedData);
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