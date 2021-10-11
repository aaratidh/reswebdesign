import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Pages/HomePages/Homepage.jsx";
import Footer from "./Components/Pages/Footer/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
