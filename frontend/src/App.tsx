import React, { Fragment }     from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import WorkoutsComponent       from "./pages/workouts/workouts.container";
import {AddWorkoutComponent}   from "./pages/add-workout/add-workout.component";


function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact={true}>
          <Link to="/workouts">workouts</Link>
          <Link to="/add">Add</Link>
        </Route>
        <Route path="/workouts" component={WorkoutsComponent}/>
        <Route path="/add" component={AddWorkoutComponent}/>
      </Switch>
    </Fragment>
  
  );
}

export default App;
