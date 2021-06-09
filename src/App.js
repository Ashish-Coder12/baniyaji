import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about'  component={About} />
          <Route path='/contact'  component={Contact} />
          <Route path='/cart'  component={Cart} />
        </Switch>
        <footer><h5>All rights reserve BANIYAJI.IN @ 2021</h5> </footer>
        </Router>
    </div>
  );
}

export default App;
