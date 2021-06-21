import React from "react";
import PropTyps from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;
const Title = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

const Grid = styled.div`
    margin-top:25px;
`;

const Section = ({title, children}) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);

Section.PropTyps = {
    title: PropTyps.string.isRequired,
    children: PropTyps.oneOfType([
        PropTyps.arrayOf(PropTyps.node),
        PropTyps.node
    ])
}

export default Section;