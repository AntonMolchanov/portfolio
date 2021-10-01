import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Hamburger from 'hamburger-react'
import {useState} from "react";
import {Route, Switch} from "react-router-dom";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
    const [isOpen, setOpen] = useState(false)

    return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path="/" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
        </Switch>
    </div>
  );
}

export default App;
