import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme.ts";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import ContentPage from "./components/ContentPage/ContentPage";
import StartPage from "./components/StartPage/StartPage"
import FilterMenu from "./components/FilterMenu/FilterMenu";
import ContentInspect from "./components/ContentInspect/ContentInspect";

const App = () => {
  const [navType, setNavType] = useState("contentPage");
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  return ( 
    <ThemeProvider theme={appTheme}>
    <CssBaseline enableColorScheme />
    <BrowserRouter>
      <div className="app">
        <Navbar  
          navType = {navType}
          onNavTypeChange = {setNavType}
        />
        <div className="content">
          <Routes>
            <Route path="/" element={<StartPage 
                                        navType = {navType} 
                                        onNavTypeChange = {setNavType}
                                        search = {search}
                                        onSearchChange = {setSearch}/>} />
            <Route path="/content" element={<ContentPage 
                                              navType = {navType} 
                                              onNavTypeChange = {setNavType}
                                              data = {data}
                                              onDataChange = {setData}/>}/>
            <Route path="/filter" element={<FilterMenu 
                                              navType = {navType} 
                                              onNavTypeChange = {setNavType}
                                              search = {search}
                                              onSearchChange = {setSearch}/>} />
            <Route path="/inspect/:id" element={<ContentInspect 
                                                  navType = {navType} 
                                                  onNavTypeChange = {setNavType}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </ThemeProvider>
   );
}
 
export default App;
