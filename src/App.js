// import logo from "./logo.svg";
import "./App.css";
import { Buttons } from "./Buttons";
import "./buttons2.css";
import { Leftnavbar } from "./Leftnavbar";
import {Routes,Route} from "react-router-dom";
import { Cards } from "./Cards";
import { Colors } from "./Colors";
import { Others } from "./Others";
import { Animations } from "./Animations";
import { Borders } from "./Borders";
import { Charts } from "./Charts";
import { Tables } from "./Tables";
import { Dashboard } from "./Dashboard";
// import { sourceleftnavbar } from './sourceleftnavbar';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Dashboard/>}/> 
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/buttons" element={<Buttons/>}/>
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/color" element={<Colors/>}/>
        <Route path="/border" element={<Borders/>}/>
        <Route path="/animation" element={<Animations/>}/>
        <Route path="/chart" element={<Charts/>}/>
        <Route path="/table" element={<Tables/>}/>
        <Route path="/other" element={<Others/>}/>
      </Routes>
      
    </div>
  );
}
export default App;
