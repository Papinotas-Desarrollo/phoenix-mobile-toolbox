import React from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';
import Proptypes from 'prop-types';
import _ from 'lodash';
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

const checkIfValidImage = source => {
  let sourceUri;

  if (_.get(source, 'uri')) {
    sourceUri = source.uri;
  } else if (_.get(source, 'testUri')) {
    sourceUri = source.testUri;
  } else {
    sourceUri = null;
  }

  switch (typeof sourceUri) {
    case 'string':
      return true;
    default:
      return false;
  }
};

const getImageSoure = source => {
  if (_.get(source, 'uri')) {
    return require(`../../${source.uri}`);
  } else if (_.get(source, 'testUri')) {
    return require(source.testUri);
  }
  return null;
};

const LoginHeader = ({ source }) => (
  <SafeAreaView style={styles.container}>
    {checkIfValidImage(source) ? (
      <Image source={getImageSoure(source)} />
    ) : (
      <View />
    )}
  </SafeAreaView>
);

export default LoginHeader;

LoginHeader.propTypes = {
  source: Proptypes.object,
};

LoginHeader.default = {
  source: {},
};
