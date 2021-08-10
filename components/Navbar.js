import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../styles/ColorStyles';
import { H3 } from '../styles/TextStyles';
import { Button } from './Button';

function Navbar({ title, logoSrc, titleColor, navBorder, navColor }) {
    return (
        <NavbarWrapper navBorder={navBorder} navColor={navColor}>

            <div className="navbar__left">
                {logoSrc && <NavbarLogo src={logoSrc} alt="logo" />}
            </div>
            {title && <Title titleColor={titleColor}>{title}</Title>}
            <NavbarButtons>
                <Button label="Login" />
                <Button type="primary-outline" type="primary" label="Register" />
                <Button type="secondary" label="Contact Us" />
            </NavbarButtons>
            {/* <div className="navbar__right--mobile">
                <MenuIcon />
            </div> */}
        </NavbarWrapper>
    )
}
const NavbarWrapper = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    padding:8px 0;
    background-color:${ props => props.navColor === 'primary' ? colors.primary["500"] : props.navColor === 'secondary' ? colors.secondary["500"] : props.navColor === 'light' ? colors.neutral["50"] : colors.neutral["900"]};

    border-bottom: ${ props => props.navBorder === 'primary' ? `2px solid ${colors.primary["500"]}` : props.navBorder === 'secondary' ? `2px solid ${colors.secondary["500"]}` : props.navBorder === 'light' ? `2px solid ${colors.neutral["50"]}` : `2px solid ${colors.neutral["900"]}`};
`;
const NavbarLogo = styled.img`
    object-fit: contain;
    height: 50px;
`;
const NavbarButtons = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between;
`;
const Title = styled(H3) `
    color:${ props => props.titleColor === 'primary' ? colors.primary["500"] : props.titleColor === 'secondary' ? colors.secondary["500"] : props.titleColor === 'light' ? colors.neutral["50"] : colors.neutral["900"]};
    margin:0;
    padding:0;
`;

Navbar.propTypes = {
    title: PropTypes.string,
    titleColor: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
    navBorder: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
    navColor: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
}
Navbar.defaultProps = {
    title: 'Navbar',
    titleColor: 'primary',
    navColor: 'light',
    navBorder: 'dark'
}
export default Navbar;
