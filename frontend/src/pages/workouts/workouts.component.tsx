import React, { PureComponent, ReactNode } from 'react';
import {
  Button,
  Container,
  Table,
} from 'reactstrap';
import { DispatchProps, StateProps } from "./workouts.container";
import { Workout }                   from "../../models/Workout";
import { Filter }                    from "../../components/filter/filter";
import { WorkoutList }               from "../../components/workout-list/workout-list";
import {
  dateSort,
  distanceSort,
  typeFilter
}                                    from "../../helpers/helpers";
import { Chart }                     from "../../components/chart/chart";
import { Link }                      from "react-router-dom";
import { PageTitle }                 from "../../components/page-title/page-title";

export interface ComponentState {
  isOpen: boolean,
  workouts: Workout[]
}

export class WorkoutsComponent extends PureComponent<StateProps & DispatchProps, ComponentState> {
  constructor(props: StateProps & DispatchProps) {
    super(props);
    this.state = {
      isOpen  : false,
      workouts: props.workouts
    }
  }
  
  componentDidMount() {
    this.props.getWorkouts();
  }
  
  componentDidUpdate(prevProps: Readonly<StateProps>, prevState: Readonly<any>, snapshot?: any): void {
    if ( prevProps !== this.props ) {
      this.setState((_: any, props: { workouts: Workout[]; }) => ( {
        workouts: [...props.workouts]
      } ))
    }
  }
  
  public render(): ReactNode {
    return (
      <Container>
        <PageTitle>Best Runner</PageTitle>
        {this.state.workouts.length > 0 && <Chart workouts={this.props.workouts}/>}
        <Table>
          <thead>
          <Filter onChange={this.onFilterChange}>
            <Link to='/add'>
              <Button color='success'>Add new</Button>
            </Link>
          </Filter>
          </thead>
          <tbody>
            <WorkoutList workouts={this.state.workouts} deleteWorkout={this.onDeleteClick}/>
          </tbody>
        </Table>
      </Container>
    );
  }
  
  private onFilterChange = (filter: { type: string, value: string | null }): void => {
    const {type, value} = filter;
    
    // Сбрасываем фильтр
    if ( !value ) {
      this.setState((_: any, props: { workouts: Workout[]; }) => {
        return {
          workouts: [...props.workouts]
        }
      })
    }
    
    // Фильтруем по типу
    if ( value && type === 'type' ) {
      this.setState((_: any, props: { workouts: Workout[]; }) => ( {
        workouts: typeFilter([...props.workouts], value)
      } ));
    }
    
    // Сортируем по дистанции
    if ( value && type === 'distance' ) {
      this.setState((_: any, props: { workouts: Workout[]; }) => ( {
        workouts: distanceSort([...props.workouts], value)
      } ));
    }
    
    // Сортируем по дате
    if ( value && type === 'date' ) {
      this.setState((_: any, props: { workouts: Workout[]; }) => ( {
        workouts: dateSort([...props.workouts], value)
      } ));
    }
  }
  
  private onDeleteClick = (w: Workout): void => {
    this.props.deleteWorkout(w);
  }
}
