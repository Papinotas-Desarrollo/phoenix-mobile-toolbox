/* @flow */
import React from 'react';
import { LoginHeader, LoginBody, LoginButtons } from './';
import Proptypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class LoginScreen extends React.Component {
  render() {
    const {
      source,
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
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
        <LoginHeader source={source} />
        <LoginBody
          bodyTitle={bodyTitle}
          bodySubtitle={bodySubtitle}
          beforeInputText={beforeInputText}
          firstInputPlaceholder={firstInputPlaceholder}
          secondInputPlaceholder={secondInputPlaceholder}
          onChangeEmail={onChangeEmail}
          onChangePassword={onChangePassword}
        />
        <LoginButtons>{buttons}</LoginButtons>
      </KeyboardAwareScrollView>
    );
  }
}

LoginScreen.propTypes = {
  source: Proptypes.object,
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
  source: {},
  bodyTitle: '',
  bodySubtitle: '',
  beforeInputText: '',
  firstInputPlaceholder: '',
  secondInputText: '',
  secondInputPlaceholder: '',
  buttons: [],
};
