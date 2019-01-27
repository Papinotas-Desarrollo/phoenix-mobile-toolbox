import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import Proptypes from 'prop-types';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    minHeight: 70,
    backgroundColor: colors.papinotasBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

const LoginHeader = ({ source, headerStyle }) => (
  <SafeAreaView style={styles.container}>
    <Image source={source} style={headerStyle} />
  </SafeAreaView>
);

export default LoginHeader;

LoginHeader.propTypes = {
  source: Proptypes.number,
  headerStyle: Proptypes.object,
};

LoginHeader.default = {
  headerStyle: {},
};
