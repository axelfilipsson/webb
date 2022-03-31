import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Cv from './components/Cv';
import Icon from './resources/icon'

function App() {
  return (
    <Router>
      <div>
        {/* <Header></Header> */}
        {/* <Route path='/' exact render={(props) => (<> <Home></Home></>)}/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects}/>
       */}
        <Icon > </Icon>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
