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
          <tr>
            <th scope="row">1</th>
            
            {this.props.workouts.map(w => (<td key={w.id}>{w.type}</td>))}
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}
