import PropTypes from 'prop-types';
import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { ErrorView } from './';

const Wrapper = ({ children, secure, phoneFunction, emailFunction }) => {
  ErrorView.defaultProps = {
    secure,
    phoneFunction,
    emailFunction,
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorView}>{children}</ErrorBoundary>
  );
};

Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  secure: PropTypes.string.isRequired,
  phoneFunction: PropTypes.func.isRequired,
  emailFunction: PropTypes.func.isRequired,
};

export default Wrapper;
