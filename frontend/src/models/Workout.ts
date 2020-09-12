import { setProps } from "../helpers/helpers";

export interface WorkoutProps {
  readonly id: string | null,
  type: string | null,
  distance: number,
  date: Date
}

export interface WorkoutModel extends WorkoutProps {
  getDistance: () => string,
  getFormattedDate: () => string
}

export class Workout implements WorkoutModel {
    readonly id: string | null = null;
    type: string | null = null;
    distance: number = 0;
    date: Date = new Date(Date.now());
  
  constructor(props?: WorkoutProps) {
    if (props) {
      setProps(props, this);
    }
  }
  
  public getDistance(): string {
    return (this.distance > 0) ? `${this.distance / 1000} km` : `0 km`;
  }
  
  public getFormattedDate(): string {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    return (this.date) ? `${(<Date>this.date).toLocaleString('en-GB', options)}` : ``;
  }
}
