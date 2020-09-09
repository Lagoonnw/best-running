import React, { PureComponent, ReactNode, Fragment } from 'react';
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled'

const Heading = styled.h1`
//@ts-ignore
  background-color: ${props => props[`bg`]};
  //@ts-ignore
  color: ${props => props[`fg`]};
`;

export class WorkoutsComponent extends PureComponent {
  constructor(props: Readonly<{}>) {
    super(props);
  }
  
  public render(): ReactNode {
    //@ts-ignore
    return (<Fragment><Heading bg={'pink'} fg={'red'}>Workout component here</Heading></Fragment>);
  }
}
