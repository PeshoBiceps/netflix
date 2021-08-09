import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Main}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/home' component={Home}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
