import React from 'react';
import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
    type: 'checkbox',
    checked: props.isChecked
}))`
  cursor: pointer;
`

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`

const LabelText = styled.span`
  color: #751f1f;
`;

function CheckBox({isChecked, label, onChange}) {
    return (
            <Label onChange={onChange}>
                <Input isChecked={isChecked}/>
                <LabelText>{label}</LabelText>
            </Label>
    );
}

export default CheckBox;

