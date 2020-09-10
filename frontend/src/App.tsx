import React, { Fragment }     from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import WorkoutsComponent from "./pages/workouts/workouts.container";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact={true}>
          <Link to="/workouts">workouts</Link>
        </Route>
        <Route path="/workouts" component={WorkoutsComponent}/>
      </Switch>
    </Fragment>
  
  );
}

export default App;
