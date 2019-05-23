import PropTypes from 'prop-types';
import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { ErrorView } from './';

const Wrapper = ({
  children,
  secure,
  account,
  appVersion,
  phoneInfo,
  osVersion,
}) => {
  ErrorView.defaultProps = {
    secure,
    account,
    appVersion,
    phoneInfo,
    osVersion,
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorView}>{children}</ErrorBoundary>
  );
};

Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  secure: PropTypes.string.isRequired,
  account: PropTypes.func.isRequired,
  appVersion: PropTypes.string.isRequired,
  phoneInfo: PropTypes.string.isRequired,
  osVersion: PropTypes.string.isRequired,
};

export default Wrapper;
