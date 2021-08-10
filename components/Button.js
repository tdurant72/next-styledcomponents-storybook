import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../styles/ColorStyles';

export const Button = ({ type, label, size, ...props }) => {
    return (
        <StyledButton type={type} size={size}>{label}</StyledButton>
    );
};

const StyledButton = styled.button`
        transition: all 0.2s ease-in;
        border-radius: 0.5rem;
        font-weight:500;
        cursor:pointer;
        margin: 0 5px;
        font-size:1rem;
        padding:0.5rem 1rem;

        font-size:${props => props.size === 'small' ? "0.875rem" : props.size === 'medium' ? "1rem" : "1.5rem"};
        
        background-color:${ props => props.type === 'primary' ? colors.primary["500"] : props.type === 'primary-outline' ? 'white' : props.type === 'secondary' ? colors.secondary["500"] : 'white'};

        color:${props => props.type === 'primary' ? colors.primary["50"] : props.type === 'primary-outline' ? colors.primary["500"] : props.type === 'secondary' ? colors.secondary["50"] : colors.secondary["500"]};

        border:${props => props.type === 'primary' ? `2px solid ${colors.primary["500"]}` : props => props.type === 'primary-outline' ? `2px solid ${colors.primary["500"]}` : props => props.type === 'secondary' ? `2px solid ${colors.secondary["500"]}` : `2px solid ${colors.secondary["500"]}`};

        box-shadow:0px 2px 2px 0px ${props => props.type === 'primary' || props.type === 'primary-outline' ? colors.primary["900"] : colors.secondary["900"]};
        
        &:hover{
            background-color:${props => props.type === 'primary' ? colors.primary["700"] : props.type === 'primary-outline' ? 'white' : props.type === 'secondary' ? colors.secondary["700"] : 'white'};
            box-shadow:0px 4px 2px 0px ${props => props.type === 'primary' || props.type === 'primary-outline' ? colors.primary["900"] : colors.secondary["900"]};
            transform: scale(1.05);
        }
`

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'primary-outline', 'secondary', 'secondary-outline']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'primary',
    size: 'medium',
    label: 'Button',
    onClick: undefined,
};
