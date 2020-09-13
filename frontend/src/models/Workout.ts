import { setProps } from "../helpers/helpers";

export interface WorkoutProps {
  id: string,
  readonly _id?: string,
  workout_type: string | null,
  distance: number,
  date: Date
}

export interface WorkoutModel extends WorkoutProps {
  getDistance: () => string,
  getFormattedDate: () => string
}

export class Workout implements WorkoutModel {
  id: string = '';
  workout_type: string | null = null;
  distance: number = 0;
  date: Date = new Date(Date.now());
  
  constructor(props?: WorkoutProps) {
    if ( props ) {
      setProps(props, this);
    }
    if ( props!._id ) {
      this.id = props!._id as string;
    }
    if (props!.date) {
      this.date = new Date(props!.date);
    }
  }
  
  public getDistance(): string {
    return ( this.distance > 0 ) ? `${this.distance / 1000} km` : `0 km`;
  }
  
  public getFormattedDate(): string {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    
    return ( this.date ) ? `${( <Date>this.date ).toLocaleString('en-GB', options)}` : ``;
  }
}
