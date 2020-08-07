import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import NoteList from "./components/NoteList/NoteList";
import CreateNote from "./components/CreateNote/CreateNote";
import CreateUser from "./components/CreateUser/CreateUser";
function App() {
  return (
	      <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={NoteList} />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
