import React  from 'react';
import styled from '@emotion/styled';

const Title = styled.h1({
  textAlign   : 'center',
  marginTop   : '20px',
  marginBottom: '30px'
});

export const PageTitle = (props: { children: any }) => (
  <Title>{ props.children }</Title>
);
