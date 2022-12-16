import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme.ts";
import Navbar from "./components/Navbar/Navbar";
import ContentPage from "./components/ContentPage/ContentPage";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import ContentInspect from "./components/ContentInspect/ContentInspect";

const App = () => {
  return ( 
    <ThemeProvider theme={appTheme}>
    <CssBaseline enableColorScheme />

    <div className="app">
    <Navbar />
    <ContentInspect />
    </div>

    </ThemeProvider>
   );
}
 
export default App;
