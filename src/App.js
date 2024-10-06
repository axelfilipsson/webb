import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <Router>
        <Main/>
        <Footer/>
    </Router>
  );
}

export default App;
