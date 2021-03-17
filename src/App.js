import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import AddUsers from "../src/components/users/AddUser";
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import EditUser from "./components/users/EditUser";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path="/users/add" component={AddUsers}/>
          <Route exact path='/users/edit/:id' component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
