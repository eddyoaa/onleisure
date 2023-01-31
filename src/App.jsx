import './App.css';
import { useState } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import ContentPage from "./components/ContentPage/ContentPage";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import ContentInspect from "./components/ContentInspect/ContentInspect";
import StartPageOne from './components/StartPage/StartPageOne';
import StartPageTwo from './components/StartPage/StartPageTwo';
import StartPageThree from './components/StartPage/StartPageThree';
import CreatePageOne from './components/CreatePages/CreatePageOne';
import CreatePageTwo from './components/CreatePages/CreatePageTwo';
import CreatePageThree from './components/CreatePages/CreatePageThree';
import CreatePageFour from './components/CreatePages/CreatePageFour';
import CreatePageFive from './components/CreatePages/CreatePageFive';
import CreatePageInspect from './components/CreatePages/CreatePageInspect';
import CreatePageFinish from './components/CreatePages/CreatePageFinish';

const App = (props) => {
  const [navType, setNavType] = useState("startPage");
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [progressValue, setProgressValue] = useState(0);
  const [createValues, setCreateValues] = useState("");
  const [savedValues, setValues] = useState([JSON]);

  console.log(navType);
  return ( 
    <HashRouter>
      <div className="app">
        <Navbar  
          navType = {navType}
          onNavTypeChange = {setNavType}
          progressValue={progressValue}
        />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Navigate to="/start" /> } /> 
            <Route path="/start" element={<StartPageOne
                                        navType = {navType} 
                                        onNavTypeChange = {setNavType}/>} />
            <Route path="/standort" element={<StartPageTwo
                                        navType = {navType} 
                                        onNavTypeChange = {setNavType}
                                        search = {search}
                                        onSearchChange = {setSearch}/>} />
            <Route path="/searchcreate" element={<StartPageThree
                                        navType = {navType} 
                                        onNavTypeChange = {setNavType}/>} />                        
            <Route path="/content" element={<ContentPage 
                                              navType = {navType} 
                                              onNavTypeChange = {setNavType}
                                              data = {data}
                                              onDataChange = {setData}
                                              search = {search}
                                              onSearchChange = {setSearch}/>}/>
            <Route path="/filter" element={<FilterMenu 
                                              navType = {navType} 
                                              onNavTypeChange = {setNavType}
                                              search = {search}
                                              onSearchChange = {setSearch}/>} />
            <Route path="/inspect/:id" element={<ContentInspect 
                                                  navType = {navType} 
                                                  onNavTypeChange = {setNavType}/>} />
            <Route path="/create/1" element={<CreatePageOne 
                                                  navType = {navType} 
                                                  onNavTypeChange = {setNavType}
                                                  progressValue={progressValue}
                                                  onProgressValueChange={setProgressValue}
                                                  createValues = {createValues}
                                                  onCreateValuesChange = {setCreateValues}
                                                  savedValues = {savedValues}
                                                  onsavedValuesChange = {setValues}/>} />
            <Route path="/create/2" element={<CreatePageTwo
                                                  navType = {navType} 
                                                  onNavTypeChange = {setNavType}
                                                  progressValue={progressValue}
                                                  onProgressValueChange={setProgressValue}
                                                  createValues = {createValues}
                                                  onCreateValuesChange = {setCreateValues}/>} />
            <Route path="/create/3" element={<CreatePageThree
                                                  navType = {navType} 
                                                  onNavTypeChange = {setNavType}
                                                  progressValue={progressValue}
                                                  onProgressValueChange={setProgressValue}
                                                  createValues = {createValues}
                                                  onCreateValuesChange = {setCreateValues}/>} />
            <Route path="/create/4" element={<CreatePageFour
                                                  navType = {navType} 
                                                  onNavTypeChange = {setNavType}
                                                  progressValue={progressValue}
                                                  onProgressValueChange={setProgressValue}
                                                  createValues = {createValues}
                                                  onCreateValuesChange = {setCreateValues}/>} />
            <Route path="/create/5" element={<CreatePageFive 
                                                  navType = {navType} 
                                                  onNavTypeChange = {setNavType}
                                                  progressValue={progressValue}
                                                  onProgressValueChange={setProgressValue}
                                                  createValues = {createValues}
                                                  onCreateValuesChange = {setCreateValues}/>} />
            <Route path="/create/inspect" element={<CreatePageInspect 
                                                  navType = {navType} 
                                                  onNavTypeChange = {setNavType}
                                                  createValues = {createValues}
                                                  onCreateValuesChange = {setCreateValues}/>} />
            <Route path="/create/finish" element={<CreatePageFinish
                                                  navType = {navType} 
                                                  onNavTypeChange = {setNavType}
                                                  createValues = {createValues}
                                                  onCreateValuesChange = {setCreateValues}/>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
   );
}
 
export default App;
