
import './App.css';
import { findDOMNode } from 'react-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './components/header'
import Footer from './components/footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div>
    
    <Router>
      <Header/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/about' component={About}/>
          <Route path='/Contact' component={Contact}/>
        </Switch>

      <Footer/>
    </Router>

  </div>
  )
}

export default App;
