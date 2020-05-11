/* @flow */
import Proptypes from 'prop-types';
import * as React from 'react';
import { StyleProp } from 'react-native';
import { SideMenuBody, SideMenuHeader } from '.';

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
  buttons: Array<any>;
  header: Array<any>;
  headerStyle: StyleProp<Object>;
  bodyStyle: StyleProp<Object>;
  onScroll: Function;
}
export default class SideMenuScreen extends React.Component<SideMenuScreenProps> {
  render() {
    const {
      buttons,
      header,
      headerStyle,
      bodyStyle,
      onScroll,
    } = this.props;
    return (
      <>
        <SideMenuHeader headerStyle={headerStyle}>{header}</SideMenuHeader>
        <SideMenuBody bodyStyle={bodyStyle} onScroll={onScroll}>{buttons}</SideMenuBody>
      </>
    );
  }
}

SideMenuScreen.propTypes = {
  buttons: Proptypes.array,
  header: Proptypes.array,
  headerStyle: Proptypes.instanceOf(Object),
  bodyStyle: Proptypes.instanceOf(Object),
  onScroll: Proptypes.func,
};

SideMenuScreen.defaultProps = {
  buttons: [],
  header: [],
  headerStyle: {},
  bodyStyle: {},
  onScroll: () => {},
};
