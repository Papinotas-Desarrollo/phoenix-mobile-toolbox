/* @flow */
import * as React from 'react';
import { SideMenuHeader, SideMenuBody } from '.';
import Proptypes from 'prop-types';
import { SafeAreaView, ScrollView, StyleProp } from 'react-native';

/**
 *
 * ## Usage
 * ```js
 *
 * import React from 'react';
 * import { SideMenu } from 'phoenix-mobile-toolbox';
 *
 * export default class SideMenuScreen extends React.Component {
 *
 *
 *    render(){
 *      const props = {
 *        containerStyle: {},
 *        buttons: [],
 *        header: [],
 *        headerStyle: {},
 *        bodyStyle: {},
 *      };
 *
 *      return <SideMenu.SideMenuScreen {...props}/>
 *    }
 * }
 *
 * ```
 */

interface SideMenuScreenProps {
  containerStyle: StyleProp<Object>;
  buttons: Array<any>;
  header: Array<any>;
  headerStyle: StyleProp<Object>;
  bodyStyle: StyleProp<Object>;
}
export default class SideMenuScreen extends React.Component<SideMenuScreenProps> {
  render() {
    const {
      containerStyle,
      buttons,
      header,
      headerStyle,
      bodyStyle,
    } = this.props;
    return (
      <SafeAreaView testID="rootView" style={containerStyle}>
        <SideMenuHeader headerStyle={headerStyle}>{header}</SideMenuHeader>
        <ScrollView style={{ flex: 1 }}>
          <SideMenuBody bodyStyle={bodyStyle}>{buttons}</SideMenuBody>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

SideMenuScreen.propTypes = {
  containerStyle: Proptypes.instanceOf(Object),
  buttons: Proptypes.object,
  header: Proptypes.object,
  headerStyle:Proptypes.instanceOf(Object),
  bodyStyle:Proptypes.instanceOf(Object),
};

SideMenuScreen.defaultProps = {
  containerStyle:{},
  buttons:{},
  header:{},
  headerStyle:{},
  bodyStyle:{},
};
