import './App.css';
import ContentCard from './components/ContentCard/ContentCard';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme.ts";
import Navbar from "./components/Navbar/Navbar";
import ContentPage from "./components/ContentPage/ContentPage";
import FilterMenu from "./components/FilterMenu/FilterMenu";

const App = () => {
  return ( 
    <ThemeProvider theme={appTheme}>
    <CssBaseline enableColorScheme />

    <div className="app">
    <Navbar />
    <ContentPage />
    </div>

    </ThemeProvider>
   );
}
 
export default App;
