import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
    padding: 0px, 20px;
`;

const HomePresenter = ({nowPlaying, upcoming, popular, loading, error}) => loading ? <Loader /> : (
    <Container>
        {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming Movies">{upcoming.map(movie => <sapn key={movie.id}>{movie.title}</sapn>)}</Section>
        )}
        {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing">{nowPlaying.map(movie => <sapn key={movie.id}>{movie.title}</sapn>)}</Section>
        )}
        {popular && popular.length > 0 && (
            <Section title="Popular Movies">{popular.map(movie => <sapn key={movie.id}>{movie.title}</sapn>)}</Section>
        )}
    </Container>
);



HomePresenter.protoTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;
