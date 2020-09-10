import React, { PureComponent, ReactNode, Fragment} from 'react';
import { css, jsx }     from "@emotion/core";
import styled           from '@emotion/styled'
import {
  Container,
  Row,
  Col,
  Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem
}                       from 'reactstrap';
import { TState }       from "./workouts.container";
import { workoutTypes } from "../../constants/constants";
import { Workout }      from "../../models/Workout";
import { Filter }       from "../../components/filter/filter";

const Heading = styled.h1`
//@ts-ignore
  background-color: ${props => props[`bg`]};
  //@ts-ignore
  color: ${props => props[`fg`]};
`;

export class WorkoutsComponent extends PureComponent<TState, any> {
  // isOpen: boolean = false;
  constructor(props: TState) {
    super(props);
    this.state = {
      isOpen  : false,
      workouts: props.workouts
    }
    
    console.log('PROPS', props)
    // this.isOpen = false
  }
  
  onFilterChange = (v: any) => {
    console.log('VALUE FROM FILTER', v);
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
          {this.state.workouts.map((w: Workout, i: number) => (
            <tr key={w.id}>
              <th scope="row">
                {i + 1}
              </th>
              <td>
                {w.type}
              </td>
              <td>
                {w.getDistance()}
              </td>
              <td>
                {w.getFormattedDate()}
              </td>
            </tr>
          ))}
          
          </tbody>
        </Table>
      </Container>
    );
  }
}
