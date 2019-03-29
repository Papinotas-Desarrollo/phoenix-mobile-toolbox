import PropTypes from 'prop-types';
import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { ErrorView } from './';

const Wrapper = ({ children, secure }) => {
  ErrorView.defaultProps = {
    secure,
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorView}>{children}</ErrorBoundary>
  );
};

Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  secure: PropTypes.string.isRequired,
};

export default Wrapper;
