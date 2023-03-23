import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  color: ${({color}) => color || 'white'};
  cursor: ${({active}) => active ? 'pointer' : 'not-allowed'};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: #e8e685;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d7d57c;
  }
`

const Button = (props) => {
    return <StyledButton {...props} onClick={props.onClick}/>
};

export default Button;
