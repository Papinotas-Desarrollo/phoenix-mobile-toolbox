/* @flow */
import React from 'react';
import { SideMenuHeader, SideMenuBody, SideMenuFooter } from '.';
import Proptypes from 'prop-types';
import { SafeAreaView } from 'react-native';

export default class SideMenuScreen extends React.Component {
    render() {
        const { containerStyle, source, headerStyle, closeMenu, headerTitle, headerSubtitle, headerDescription } = this.props;

        return (
            <SafeAreaView style={containerStyle}>
                <SideMenuHeader
                    source={source}
                    headerStyle={headerStyle}
                    closeMenu={closeMenu}
                    headerTitle={headerTitle}
                    headerSubtitle={headerSubtitle}
                    headerDescription={headerDescription} />
                <SideMenuFooter

                />

            </SafeAreaView>
        );
    }
}

SideMenuScreen.propTypes = {
    source: Proptypes.number,
    headerStyle: Proptypes.object,
    containerStyle: Proptypes.object,
    bodyTitle: Proptypes.string,
    bodySubtitle: Proptypes.string,
    beforeInputText: Proptypes.string,
    firstInputPlaceholder: Proptypes.string,
    secondInputPlaceholder: Proptypes.string,
    onChangeEmail: Proptypes.func.isRequired,
    onChangePassword: Proptypes.func.isRequired,
    buttons: Proptypes.array,
    headerTitle: Proptypes.string.isRequired,
    headerSubtitle: Proptypes.string,
    headerDescription: Proptypes.string,
};

SideMenuScreen.default = {
    headerStyle: {},
    containerStyle: {},
    bodyTitle: '',
    bodySubtitle: '',
    beforeInputText: '',
    firstInputPlaceholder: '',
    secondInputText: '',
    secondInputPlaceholder: '',
    buttons: [],
    headerTitle: '',
};
