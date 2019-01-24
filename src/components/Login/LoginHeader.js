import React from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';
import Proptypes from 'prop-types';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: colors.papinotasBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
});

const LoginHeader = ({ uri }) => (
  <SafeAreaView style={styles.container}>
    {uri === '' ? <Image uri={{ uri }} /> : <View />}
  </SafeAreaView>
);

export default LoginHeader;

LoginHeader.propTypes = {
  uri: Proptypes.string,
};

LoginHeader.default = {
  uri: '',
}