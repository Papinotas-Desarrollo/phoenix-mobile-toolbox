/* @flow */
import React from 'react';
import { SideMenuHeader, SideMenuBody } from '.';
import Proptypes from 'prop-types';
import { SafeAreaView, ScrollView } from 'react-native';

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
export default class SideMenuScreen extends React.Component {
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
    containerStyle: Proptypes.object,
    buttons: Proptypes.array,
    header: Proptypes.array,
};

SideMenuScreen.default = {
    containerStyle: {},
    buttons: [],
    header: [],
};
