/* @flow */
import Proptypes from 'prop-types';
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { LoginBody, LoginButtons, LoginHeader } from './';

/**
 *
 * ## Usage
 * ```js
 *  
 * import * as React from 'react';
 * import { TouchableOpacity, StyleSheet, Text } from 'react-native';
 * import { Login } from 'phoenix-mobile-toolbox';
 * 
 * const styles = StyleSheet.create({
 *   headerStyle: {},
 * });
 * 
 * export default class LoginContainer extends React.Component {
 *   getEmail = text => console.log(text);
 *   getPassword = text => console.log(text);
 * 
 *   render() {
 *     const buttons = [
 *       <TouchableOpacity key="key1"><Text>Button1</Text></TouchableOpacity>,
 *       <TouchableOpacity key="key2"><Text>Button1</Text></TouchableOpacity>,
 *     ];
 * 
 *     const props = {
 *       defaultEmail: '',
 *       source: require('..'),
 *       headerStyle: styles.headerStyle,
 *       bodyTitle: '',
 *       bodySubtitle: '',
 *       beforeInputText: '',
 *       firstInputPlaceholder: 'ejemplo@gmail.com',
 *       secondInputPlaceholder: 'password',
 *       onChangeEmail: this.getEmail,
 *       onChangePassword: this.getPassword,
 *       buttons,
 *     };
 * 
 *     return <Login.LoginScreen {...props} />;
 *   }
 * }
 *
 * ```
 */
export default class LoginScreen extends React.Component {
  render() {
    const {
      defaultEmail,
      source,
      headerStyle,
      bodyTitle,
      bodySubtitle,
      beforeInputText,
      firstInputPlaceholder,
      secondInputPlaceholder,
      onChangeEmail,
      onChangePassword,
      buttons,
    } = this.props;

    return (
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={64}>
        <LoginHeader source={source} headerStyle={headerStyle} />
        <LoginBody
          defaultEmail={defaultEmail}
          bodyTitle={bodyTitle}
          bodySubtitle={bodySubtitle}
          beforeInputText={beforeInputText}
          firstInputPlaceholder={firstInputPlaceholder}
          secondInputPlaceholder={secondInputPlaceholder}
          onChangeEmail={onChangeEmail}
          onChangePassword={onChangePassword}
        />
        <LoginButtons>{buttons}</LoginButtons>
      </KeyboardAvoidingView>
    );
  }
}

LoginScreen.propTypes = {
  defaultEmail: Proptypes.string,
  source: Proptypes.number,
  headerStyle: Proptypes.object,
  bodyTitle: Proptypes.string,
  bodySubtitle: Proptypes.string,
  beforeInputText: Proptypes.string,
  firstInputPlaceholder: Proptypes.string,
  secondInputPlaceholder: Proptypes.string,
  onChangeEmail: Proptypes.func.isRequired,
  onChangePassword: Proptypes.func.isRequired,
  buttons: Proptypes.array,
};

LoginScreen.default = {
  defaultEmail: '',
  headerStyle: {},
  bodyTitle: '',
  bodySubtitle: '',
  beforeInputText: '',
  firstInputPlaceholder: '',
  secondInputText: '',
  secondInputPlaceholder: '',
  buttons: [],
};
