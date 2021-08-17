import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import ScrollToTop from "./ScrollToTop";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
