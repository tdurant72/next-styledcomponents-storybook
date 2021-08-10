import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MediumText } from "../styles/TextStyles";
import { colors } from '../styles/ColorStyles';

const Input = ({ type, placeholder, labelColor, label }) => {
    return (
        <Container>
            <StyledLabel labelColor={labelColor}>{label}</StyledLabel>
            <StyledInput type={type ? type : "text"} placeholder={placeholder && placeholder} required autoComplete="off" />
            <Status />
        </Container>
    )
}

const StyledLabel = styled(MediumText) `
    color:${ props => props.labelColor === 'primary' ? colors.primary["500"] : props.labelColor === 'secondary' ? colors.secondary["500"] : props.labelColor === 'light' ? colors.neutral["50"] : colors.neutral["900"]};
`;
const StyledInput = styled.input`
    width:${props => props.type === 'radio' || props.type === 'checkbox' ? '' : '80%'} ;
    max-width:350px;
    min-width:${props => props.type === 'radio' || props.type === 'checkbox' ? '' : '250px'} ;
    height: 40px;
    border:none;
    margin: 0.5rem;
    background-color: #F5F5F5;
    box-shadow:${props => props.type === 'radio' || props.type === 'checkbox' ? '' : '0px 14px 9px -15px rgba(0,0,0, 0.25)'} ;
    border-radius:5px;
    padding:4px;
    transition: all 0.2s ease-in;
     &:hover{
         transform:translateY(-3px);
     }
`;
const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Status = styled.div`
     height:10px;
     width: 10px;
     background: #9d9d9d;
     border-radius:10px;
     margin-left:1rem;

     ${StyledInput}:focus + & {
         background: #ffa689;
     }
     ${StyledInput}:invalid + & {
         background: #fe2f75;
     }
     ${StyledInput}:valid + & {
         background: #70EDB9;
     }
`;


Input.propTypes = {
    labelColor: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'checkbox', 'radio', 'email', 'password', 'tel']),
}
Input.defaultProps = {
    labelColor: 'primary',
    label: 'User Name',
    type: 'text',
    placeholder: ''
}
export default Input;