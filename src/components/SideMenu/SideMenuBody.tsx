import * as React from 'react';
import { StyleSheet, View, Text, StyleProp } from 'react-native';
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

interface SideMenuBodyProps {
  children: Array<any>;
  bodyStyle: StyleProp<Object>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: 5,
  },
});

const SideMenuBody: React.FunctionComponent<SideMenuBodyProps> = ({
  children,
  bodyStyle,
}) => {
  if (React.Children.count(children) > 0)
    return <View style={[styles.container, bodyStyle]}>{children}</View>;
  return (
    <View style={[styles.container, bodyStyle]}>
      <Text>{Dictionary.noChildren}</Text>
    </View>
  );
};

SideMenuBody.propTypes = {
  children: Proptypes.array,
  bodyStyle: Proptypes.instanceOf(Object),
};

SideMenuBody.defaultProps = {
  children: [],
};

export default SideMenuBody;