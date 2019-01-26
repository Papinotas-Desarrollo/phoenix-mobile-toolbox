import React from 'react';
import { StyleSheet, View } from 'react-native';
import Proptypes from 'prop-types';

const styles = StyleSheet.create({
  singleButton: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  nButtons: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  noButton: {},
});

const LoginButtons = ({ children }) => {
  if (React.Children.count(children) === 1)
    return <View style={styles.singleButton}>{children}</View>;
  if (React.Children.count(children) > 1)
    return <View style={styles.nButtons}>{children}</View>;
  return <View style={styles.noButton}>{children}</View>;
};

export default LoginButtons;

LoginButtons.propTypes = {
  children: Proptypes.node,
};

LoginButtons.default = {
  children: [],
};
