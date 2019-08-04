import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notes from "../../Routes/Notes";
import Note from "../../Routes/Note";
import Add from "../../Routes/Add";
import Edit from "../../Routes/Edit";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/nomad-notes/"} Component={Notes} />
          <Route path={"/nomad-notes/add"} Component={Add} />
          <Route path={"/nomad-notes/note/:id"} Component={Note} />
          <Route path={"/nomad-notes/edit/:id"} Component={Edit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;