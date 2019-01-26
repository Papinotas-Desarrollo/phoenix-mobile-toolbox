import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Proptypes from 'prop-types';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  title: {
    backgroundColor: colors.papinotasBlue,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  titleText: {
    marginLeft: 13,
    marginBottom: 13,
    fontWeight: '600',
    fontSize: 22,
    color: colors.white,
  },
  subtitle: {
    marginLeft: 13,
    marginTop: 9,
    marginBottom: 5,
    fontSize: 20,
    color: colors.papinotasOrange,
  },
  beforeInputText: {
    marginHorizontal: 13,
    marginBottom: 13,
    fontSize: 16,
  },
  emailInput: {
    width: '100%',
    marginLeft: 13,
    marginRight: 16,
    marginBottom: 10,
    fontSize: 16,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 13,
  },
  passwordInput: {
    flex: 0.8,
    marginBottom: 10,
    fontSize: 16,
  },
  passwordInputIcon: {
    flex: 0.2,
    alignItems: 'center',
  },
  lineGray: {
    marginHorizontal: 13,
    marginBottom: 42,
    borderBottomColor: colors.lineGray,
    borderBottomWidth: 2,
  },
  lineActive: {
    borderBottomColor: colors.papinotasOrange,
  },
});

class LoginBody extends React.Component {

  state = {
    currentInputFocus: 0,
    secureText: true,
    passwordHide: true
  }

  render() {

    const {
      bodyTitle,
      bodySubtitle,
      beforeInputText,
      firstInputPlaceholder,
      secondInputPlaceholder,
      onChangeEmail,
      onChangePassword,
    } = this.props;

    const { passwordHide, currentInputFocus } = this.state;

    return (
      <React.Fragment>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            {bodyTitle}
          </Text>
        </View>
        <View>
          <Text style={styles.subtitle}>
            {bodySubtitle}
          </Text>
          <Text style={styles.beforeInputText}>
            {beforeInputText}
          </Text>
          <TextInput
            style={styles.emailInput}
            placeholder={firstInputPlaceholder}
            onChangeText={text => onChangeEmail(text)}
            onFocus={() => this.setState({ currentInputFocus: 1 })}
            onBlur={() => this.setState({ currentInputFocus: 0 })}
          />
          <View style={[styles.lineGray, currentInputFocus === 1 ? styles.lineActive : null]} />
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={passwordHide}
              placeholder={secondInputPlaceholder}
              onChangeText={text => onChangePassword(text)}
              onFocus={() => this.setState({ currentInputFocus: 2 })}
              onBlur={() => this.setState({ currentInputFocus: 0 })}
            />
            <TouchableHighlight
              style={styles.passwordInputIcon}
              onPress={() => this.setState({ passwordHide: !passwordHide })}
            >
              <Icon color={passwordHide ? colors.papinotasBlue : colors.papinotasOrange} size={30} name="remove-red-eye" />
            </TouchableHighlight>
          </View>
          <View style={[styles.lineGray, currentInputFocus === 2 ? styles.lineActive : null]} />
        </View>
      </React.Fragment>
    );
  }
}

export default LoginBody;

LoginBody.propTypes = {
  bodyTitle: Proptypes.string,
  bodySubtitle: Proptypes.string,
  beforeInputText: Proptypes.string,
  firstInputPlaceholder: Proptypes.string,
  secondInputPlaceholder: Proptypes.string,
  onChangeEmail: Proptypes.func.isRequired,
  onChangePassword: Proptypes.func.isRequired,
};

LoginBody.default = {
  bodyTitle: '',
  bodySubtitle: '',
  beforeInputText: '',
  firstInputPlaceholder: '',
  secondInputText: '',
  secondInputPlaceholder: '',
};
