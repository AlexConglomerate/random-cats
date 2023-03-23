import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: ${({color}) => color || 'black'};
  font-size: 20px;
  font-weight: 700;
`

const Title = (props) => {
    return <StyledTitle {...props}/>
};

export default Title;
