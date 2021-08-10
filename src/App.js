import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GP from './components/pages/GP';
import About from './components/pages/About';
import Skin from './components/pages/Skin';
import Footer from './components/Footer';
import Fees from './components/pages/Fees';
import Blog from './components/pages/Blog';
import Psychology from './components/pages/Psychology';
import Resources from './components/pages/Resources';
import Contact from './components/pages/Contact';



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/general-practice' component={GP} />
          <Route path='/skin-cancer' component={Skin} />
          <Route path='/fees' exact component={Fees} />
          <Route path='/blog' component={Blog} />
          <Route path='/resources' component={Resources} />
          <Route path='/psychology' component={Psychology} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
      
      
    </>
  );
}

export default App;