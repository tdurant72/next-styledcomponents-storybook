import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { H3 } from '../styles/TextStyles';
import { colors } from '../styles/ColorStyles';

const StyledSection = styled.div`
    width:100%;
    background-color:${ props => props.sectionColor === 'primary' ? colors.primary["500"] : props.sectionColor === 'secondary' ? colors.secondary["500"] : props.sectionColor === 'light' ? colors.neutral["50"] : colors.neutral["900"]};
`;
const SectionTitle = styled(H3) `
text-align:center;
    color: ${ props => props.titleColor === 'primary' ? colors.primary["500"] : props.titleColor === 'secondary' ? colors.secondary["500"] : props.titleColor === 'light' ? colors.neutral["50"] : colors.neutral["900"]};
    margin: 10px;
`;
function Section({ title, titleColor, sectionColor, children, ...props }) {
    return (
        <StyledSection sectionColor={sectionColor}>
            <SectionTitle titleColor={titleColor}>{title}</SectionTitle>
            {children}
        </StyledSection>
    )
}

Section.propTypes = {
    sectionColor: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
    title: PropTypes.string,
    titleColor: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
}
Section.defaultProps = {
    sectionColor: 'light',
    title: '',
    titleColor: 'primary'
}
export default Section

