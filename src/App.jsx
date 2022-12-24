import './App.css';
import ContentCard from './components/ContentCard/ContentCard';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme.ts";
import Navbar from "./components/Navbar/Navbar";
import ContentPage from "./components/ContentPage/ContentPage";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import Searchbar from "./components/Searchbar/Searchbar"
import { useState } from 'react';

const App = () => {
  const [navType, setNavType] = useState("startPage");
  return ( 
    <ThemeProvider theme={appTheme}>
    <CssBaseline enableColorScheme />

    <div className="app">
    <Navbar 
    navType = {navType}
    onNavTypeChange = {setNavType}
    />
    <ContentCard />
    </div>

    </ThemeProvider>
   );
}
 
export default App;
