import React from 'react';
import './App.css';
import Home from './Component/Home';
import Blog from './Component/Blog';
import Faq from './Component/Faq';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
       <div>
        <Home />
      <Route path="/blog" component={Blog} />
      <Route path="/faq/blog" component={Faq} />

    </div>
    </Router>
   
  );
}

export default App;
