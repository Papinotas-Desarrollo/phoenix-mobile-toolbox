import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { ErrorView } from './';
import PropTypes from 'prop-types';

// const loadView = ({ secure, styles }) => <ErrorView secure={secure} styles={styles} />;

const Wrapper = ({ children, secure, styles }) => {
  ErrorView.defaultProps = {
    secure,
    styles,
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorView}>{children}</ErrorBoundary>
  );
};

Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  secure: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Wrapper.defaultPops = {
  style: {},
};

export default Wrapper;
