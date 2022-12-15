import './App.css';
import ContentCard from './components/ContentCard/ContentCard';
import Navbar from "./components/Navbar/Navbar";
import Card from './components/ContentCard/ContentCard';
import Card_Page from "./components/ContentPage/ContentPage"

const App = () => {
  return ( 
    <div className="App">
        <Navbar
        />
        <Card
        />
        <Card_Page
        />

    </div>
    );

}
 
export default App;
