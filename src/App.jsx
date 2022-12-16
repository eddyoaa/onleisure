import './App.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme.ts";
import Navbar from "./components/Navbar/Navbar";
import FilterMenu from "./components/FilterMenu/FilterMenu";

const App = () => {
  return ( 
    <ThemeProvider theme={appTheme}>
    <CssBaseline enableColorScheme />

    <div className="app">
    <Navbar />
    <FilterMenu />
    </div>

    </ThemeProvider>
   );
}
 
export default App;
