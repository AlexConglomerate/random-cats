import React from 'react';
import styled from 'styled-components'

const StyledAppWrapper = styled.button`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: #ecebaf;
  width: 310px;
  min-height: 500px;
  cursor: default;
  border-radius: 10px;
  border: 2px solid palevioletred;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto
`;


const AppWrapper = (props) => {
    return <StyledAppWrapper {...props} onClick={props.onClick}/>
};

export default AppWrapper;