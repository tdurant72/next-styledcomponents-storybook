import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { H2 } from '../styles/TextStyles';
import { colors } from '../styles/ColorStyles';


function MainContent({ title, titleColor, pageColor, children, ...props }) {
    return (
        <StyledPage pageColor={pageColor}>
            <PageTitle titleColor={titleColor}>{title}</PageTitle>{children}
        </StyledPage>
    )
}

const StyledPage = styled.div`
    width:100%;
    margin:0;
    padding:0;
    background-color:${ props => props.pageColor === 'primary' ? colors.primary["500"] : props.pageColor === 'secondary' ? colors.secondary["500"] : props.pageColor === 'light' ? colors.neutral["50"] : colors.neutral["900"]};
`;
const PageTitle = styled(H2) `
text-align:center;
    color: ${ props => props.titleColor === 'primary' ? colors.primary["500"] : props.titleColor === 'secondary' ? colors.secondary["500"] : props.titleColor === 'light' ? colors.neutral["50"] : colors.neutral["900"]};
`;

MainContent.propTypes = {
    pageColor: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
    title: PropTypes.string,
    titleColor: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
}
MainContent.defaultProps = {
    pageColor: 'light',
    title: '',
    titleColor: 'primary'
}
export default MainContent;

