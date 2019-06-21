import * as React from 'react';
import { Dimensions, View, StyleSheet, Text, StyleProp } from 'react-native';
import Proptypes from 'prop-types';
import Dictionary from '../../conf/dictionary';

/**
 *
 * ## Usage
 * ```js
 *
 * import React from 'react';
 * import { SideMenu } from 'phoenix-mobile-toolbox';
 *
 * export default class SideMenuHeaderContainer extends React.Component {
 *
 *
 *    render(){
 *      const props = {
 *        headerStyle: {},
 *        children: [],
 *      };
 *
 *      return <SideMenu.SideMenuHeader {...props}/>
 *    }
 * }
 *
 * ```
 */

const headerHeight = Dimensions.get('screen').height * 0.15;

interface SideMenuHeaderProps {
  children: Array<any>;
  headerStyle: StyleProp;
}

const styles = StyleSheet.create({
  container: {
    minHeight: headerHeight,
  },
});

const SideMenuHeader: React.FunctionComponent<SideMenuHeaderProps> = ({
  children,
  headerStyle,
}) => {
  if (React.Children.count(children) > 0)
    return <View style={[styles.container, headerStyle]}>{children}</View>;
  return (
    <View style={[styles.container, headerStyle]}>
      <Text>{Dictionary.noChildren}</Text>
    </View>
  );
};

export default SideMenuHeader;

SideMenuHeader.propTypes = {
  children: Proptypes.node,
  headerStyle:Proptypes.instanceOf(Object),
};

SideMenuHeader.default = {
  children: [],
};
