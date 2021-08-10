import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { H2 } from '../styles/TextStyles';
import { colors } from '../styles/ColorStyles';

const Title = styled(H2) `

    color: ${ props => props.titleColor === 'primary' ? colors.primary["500"] : props.titleColor === 'secondary' ? colors.secondary["500"] : props.titleColor === 'light' ? colors.neutral["50"] : colors.neutral["900"]};
    margin: 0 auto;
`;
function SectionTitle({ title, titleColor, ...props }) {
    return (
        <Title titleColor={titleColor}>
            {title}
        </Title>
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string,
    titleColor: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
}
SectionTitle.defaultProps = {
    title: 'Section',
    titleColor: 'primary'
}

export default SectionTitle

