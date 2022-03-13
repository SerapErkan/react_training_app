import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 import  './App.css';
 import About from "./components/about"
 import Home from "./components/home"
 import Users from "./components/users"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">Users</Link>
            </li>
          </ul>
        </nav>



        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>



      </div>
    </Router>






  );
}

export default App;
