import React, { Fragment }     from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import WorkoutsComponent       from "./pages/workouts/workouts.container";
import AddWorkoutComponent   from "./pages/add-workout/add-workout.container";


function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact={true} component={WorkoutsComponent}/>
        <Route path="/add" component={AddWorkoutComponent}/>
      </Switch>
    </Fragment>
  
  );
}

export default App;
