import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import Proptypes from 'prop-types';
import colors from '../../styles/colors';

/**
 *
 * ## Usage
 * ```js
 *  
 * import * as React from 'react';
 * import { Login } from 'phoenix-mobile-toolbox';
 * 
 * export default class LoginHeaderContainer extends React.Component {
 *    render(){
 *      return <Login.LoginHeader source={require('..')} headerStyle={{ margin: 0 }}/>
 *    }
 * }
 *
 * ```
 */

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
