import Proptypes from 'prop-types';
import * as React from 'react';
import { ScrollView, StyleProp, StyleSheet, Text, View } from 'react-native';
import Dictionary from '../../conf/dictionary';

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
    justifyContent: 'flex-start',
  },
});

const SideMenuBody: React.FunctionComponent<SideMenuBodyProps> = ({
  children,
  bodyStyle,
}) => {
  if (React.Children.count(children) > 0)
    return (
      <ScrollView>
        {children}
      </ScrollView>
    );
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
  bodyStyle: {},
};

export default SideMenuBody;