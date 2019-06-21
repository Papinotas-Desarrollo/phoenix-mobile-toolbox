import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Dictionary from '../../conf/dictionary';
import Proptypes from 'prop-types';

/**
 *
 * ## Usage
 * ```js
 *
 * import React from 'react';
 * import { SideMenu } from 'phoenix-mobile-toolbox';
 *
 * export default class SideMenuBodyContainer extends React.Component {
 *
 *
 *    render(){
 *      const props = {
 *        children: {},
 *        bodyStyle: [],
 *      };
 *
 *      return <SideMenu.SideMenuBody {...props}/>
 *    }
 * }
 *
 * ```
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: 5,
  },
});

const SideMenuBody = ({ children, bodyStyle }) => {
  if (React.Children.count(children) > 0)
    return <View style={[styles.container, bodyStyle]}>{children}</View>;
  return (
    <View style={[styles.container, bodyStyle]}>
      <Text>{Dictionary.noChildren}</Text>
    </View>
  );
};

export default SideMenuBody;

SideMenuBody.Proptypes = {
  children: Proptypes.node,
};

SideMenuBody.default = {
  children: [],
};
