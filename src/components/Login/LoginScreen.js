import React from 'react';
import { LoginHeader, LoginBody, LoginButtons } from './';
import Proptypes from 'prop-types';

export default class LoginScreen extends React.Component<props, void> {
  render() {

    const { uri, bodyTitle, bodySubtitle, beforeInputText, firstInputPlaceholder, secondInputPlaceholder, } = this.props;

    return (
      <React.Fragment>
        <LoginHeader
          uri={uri}
        />
        <LoginBody
          bodyTitle={bodyTitle}
          bodySubtitle={bodySubtitle}
          beforeInputText={beforeInputText}
          firstInputPlaceholder={firstInputPlaceholder}
          secondInputPlaceholder={secondInputPlaceholder}
        />
        <LoginButtons >
          {
            this.props.buttons
          }
        </LoginButtons>
      </React.Fragment>
    );
  }
}
