import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({movieResults, tvResults, searchTerm, loading, error, handleSubmit}) => null;

SearchPresenter.protoTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequireds
};

export default SearchPresenter;

