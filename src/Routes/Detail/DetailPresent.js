import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({result, error, handleSubmit}) => null;

DetailPresenter.protoTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequireds
};

export default DetailPresenter;

