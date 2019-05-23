import PropTypes from 'prop-types';
import React from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dictionary from '../../conf/dictionary';
import colors from '../../styles/colors';
import { sendEmail } from '../Help/HelpAccordion';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.papinotasBlue,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: '300',
    paddingBottom: 16,
    color: colors.white,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.white,
    width: 150,
    textAlign: 'center',
  },
  error: {
    paddingVertical: 16,
    color: colors.white,
  },
  button: {
    marginTop: 150,
    backgroundColor: colors.papinotasBlue,
    padding: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.white,
  },
  helpButton: {
    marginTop: 75,
    backgroundColor: colors.papinotasBlue,
    padding: 16,
    marginHorizontal: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.white,
  },
  modalButtons: {
    marginTop: 0,
  },
  buttonText: {
    color: colors.white,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.fadedGray,
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  appBarContainer: {
    backgroundColor: colors.papinotasBlue,
    elevation: 0,
  },
  modalOpen: {
    height: 180,
  },
  modalTextInput: {
    height: 50,
    width: '100%',
  },
  iconRotation: {
    transform: [{ rotate: '45deg' }],
  },
  helpButtonsContainer: {
    flexDirection: 'row',
  },
});

const retryCounter = 10;

class ErrorView extends React.PureComponent {
  state = {
    visible: false,
    counter: 0,
    text: '',
  };

  modalHandler = visible => this.setState({ visible });

  updateCounter = () =>
    this.setState(prevState => ({ counter: prevState.counter + 1 }));

  showError = () => {
    const { counter, text } = this.state;
    const { secure } = this.props;
    if (counter > retryCounter && text === secure) {
      this.modalHandler(false);
      return true;
    }
    return false;
  };

  compose = async (appVersion, phoneInfo, osVersion, error) => {
    const { account } = this.props;
    const currentAccount = await account();
    sendEmail(appVersion, phoneInfo, osVersion, currentAccount, error);
  };

  render() {
    const { counter, text, visible } = this.state;
    const { error, resetError, appVersion, phoneInfo, osVersion } = this.props;

    return (
      <React.Fragment>
        <SafeAreaView style={styles.container}>
          <Appbar.Header style={styles.appBarContainer}>
            <Appbar.Content title={''} />
            <Appbar.Action
              icon="more-vert"
              onPress={() => this.modalHandler(true)}
              color={colors.white}
            />
          </Appbar.Header>
          <ScrollView>
            <View style={styles.content}>
              <Icon
                style={styles.iconRotation}
                size={250}
                name="add-circle-outline"
                color={colors.white}
              />
              <Text style={styles.title}>{Dictionary.errors.errorTitle}</Text>
              <Text style={styles.subtitle}>{Dictionary.errors.errorText}</Text>
              <TouchableOpacity style={styles.helpButton} onPress={resetError}>
                <Text style={styles.buttonText}>
                  {Dictionary.general.tryAgain}
                </Text>
              </TouchableOpacity>
              <View style={styles.helpButtonsContainer}>
                <TouchableOpacity
                  style={styles.helpButton}
                  onPress={() => {
                    Linking.openURL(
                      `tel:${Dictionary.help.supportPhoneNumber}`
                    );
                  }}
                >
                  <Icon size={25} name="call" color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.helpButton}
                  onPress={() => {
                    this.compose(
                      appVersion,
                      phoneInfo,
                      osVersion,
                      error
                    );
                  }}
                >
                  <Icon size={25} name="email" color={colors.white} />
                </TouchableOpacity>
              </View>

              {this.showError() ? (
                <Text style={styles.error}>{error.toString()}</Text>
              ) : null}
            </View>
          </ScrollView>
        </SafeAreaView>
        <Modal
          animationType="fade"
          transparent
          visible={visible}
          onRequestClose={() => this.modalHandler(false)}
          onShow={() => this.setState({ counter: 0, text: '' })}
        >
          <View style={styles.modalContainer}>
            <View
              style={[
                styles.modalContent,
                counter > retryCounter ? styles.modalOpen : {},
              ]}
            >
              {counter > retryCounter ? (
                <TextInput
                  style={styles.modalTextInput}
                  label=""
                  value={text}
                  onChangeText={textInput => this.setState({ text: textInput })}
                  secureTextEntry
                />
              ) : null}
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.modalButtons]}
                  onPress={() => this.updateCounter()}
                >
                  <Text style={styles.buttonText}>
                    {Dictionary.general.advanced}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.modalButtons]}
                  onPress={() => this.modalHandler(false)}
                >
                  <Text style={styles.buttonText}>{Dictionary.general.ok}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </React.Fragment>
    );
  }
}

ErrorView.propTypes = {
  error: PropTypes.any.isRequired,
  resetError: PropTypes.any.isRequired,
};

export default ErrorView;
