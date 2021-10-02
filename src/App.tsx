import React from 'react';  
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//import { ChangeLenguage } from './components/ChangeLeng';
import { Navbar } from './components/Navbar';
import WelcomePage from './pages';
import { ImageUploadPage } from './pages/photo';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/upload/image" exact component={ ImageUploadPage} />
      </Switch>
    </Router>

    
  );
}

export default App;
