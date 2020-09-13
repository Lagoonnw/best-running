import React, { PureComponent, ReactNode }    from 'react';
import {
  Container,
  Table,
}                                             from 'reactstrap';
import { TState }                             from "./workouts.container";
import { Workout }                            from "../../models/Workout";
import { Filter }                             from "../../components/filter/filter";
import { WorkoutList }                        from "../../components/workout-list/workout-list";
import { dateSort, distanceSort, typeFilter } from "../../helpers/helpers";
import axios from 'axios';

export class WorkoutsComponent extends PureComponent<TState, any> {
  constructor(props: TState) {
    super(props);
    //@ts-ignore
    const {getWorkouts} = props;
    this.state = {
      isOpen  : false,
      workouts: props.workouts
    }
    // getWorkouts();
    console.log('props', props );
  }
  
  onFilterChange = (filter: { type: string, value: string | null }): void => {
    const {type, value} = filter;
    if ( !value ) {
      this.setState((_: any, props: { workouts: Workout[]; }) => {
        return {
          workouts: [...props.workouts]
        }
      })
    }
    
    if ( value && type === 'type' ) {
      this.setState((_: any, props: { workouts: Workout[]; }) => ( {
        workouts: typeFilter([...props.workouts], value)
      } ))
    }
    
    if ( value && type === 'distance' ) {
      this.setState((_: any, props: { workouts: Workout[]; }) => ( {
        workouts: distanceSort([...props.workouts], value)
      } ));
    }
    
    if ( value && type === 'date' ) {
      this.setState((_: any, props: { workouts: Workout[]; }) => ( {
        workouts: dateSort([...props.workouts], value)
      } ))
    }
  }
  
  componentDidMount() {
    //@ts-ignore
    this.props.getWorkouts();
  }
  
  componentDidUpdate(prevProps: Readonly<TState>, prevState: Readonly<any>, snapshot?: any) {
    if (prevProps !== this.props) {
      this.setState((_: any, props: { workouts: Workout[]; }) => ({
        workouts: [...props.workouts]
      }))
    }
    
  }
  
  
  public render(): ReactNode {
    //@ts-ignore
    // @ts-ignore
    return (
      <Container>
        <Table>
          <thead>
          <Filter onChange={this.onFilterChange}/>
          </thead>
          <tbody>
          <WorkoutList workouts={this.state.workouts}/>
          </tbody>
        </Table>
      </Container>
    );
  }
}
