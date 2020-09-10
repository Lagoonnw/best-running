import React, { PureComponent, ReactNode, Fragment, useState }                        from 'react';
import { css, jsx }                                                                   from "@emotion/core";
import styled                                                                         from '@emotion/styled'
import {
  Container,
  Row,
  Col,
  Table, UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { TState }                                                                     from "./workouts.container";

const Heading = styled.h1`
//@ts-ignore
  background-color: ${props => props[`bg`]};
  //@ts-ignore
  color: ${props => props[`fg`]};
`;

export class WorkoutsComponent extends PureComponent<TState, any> {
  isOpen: boolean = false;
  constructor(props: TState) {
    super(props);
    
    console.log('PROPS', props)
    // this.isOpen = false
  }
  
  toggle = () => {
    console.log('is open', this.isOpen );
    this.isOpen = !this.isOpen;
  };
  
  public render(): ReactNode {
    //@ts-ignore
    // @ts-ignore
    return (
      <Container>
        <Table>
          <thead>
          <tr>
            <th>#</th>
            <th>
              <UncontrolledDropdown>
                <DropdownToggle caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem disabled>Action (disabled)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          {this.props.workouts.map((w, i) => (
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
