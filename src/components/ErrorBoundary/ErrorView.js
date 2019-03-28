import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
  Modal,
  StatusBar,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dictionary from '../../conf/dictionary';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: '300',
    paddingBottom: 16,
    marginTop: 20,
  },
  subtitle: {
    marginBottom: 20,
    fontSize: 32,
    fontWeight: '800',
  },
  error: {
    paddingVertical: 16,
  },
  button: {
    backgroundColor: colors.papinotasBlue,
    borderRadius: 50,
    padding: 16,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.fadedGray,
  },
  modalContent: {
    width: 300,
    height: 100,
    backgroundColor: colors.white,
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    padding: 10,
  },
  appBarContainer: {
    backgroundColor: colors.papinotasBlue,
  },
  modalOpen: {
    height: 180,
  },
});

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
    if (counter > 10 && text === secure) {
      this.modalHandler(false);
      return true;
    }
    return false;
  };

  render() {
    const { counter, text, visible } = this.state;
    const { error, resetError } = this.props;
    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View>
            <TouchableOpacity
              onPress={() => this.modalHandler(true)}
            >
              <Icon
                icon="more-vert"
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.content}>
              <Text style={styles.title}>{Dictionary.errors.errorTitle}</Text>
              <Text style={styles.subtitle}>{Dictionary.errors.errorText}</Text>
              {this.showError() ? (
                <Text style={styles.error}>{error.toString()}</Text>
              ) : null}
              <TouchableOpacity style={styles.button} onPress={resetError}>
                <Text style={styles.buttonText}>
                  {Dictionary.general.tryAgain}
                </Text>
              </TouchableOpacity>
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
                counter > 10 ? styles.modalOpen : {},
              ]}
            >
              {counter > 10 ? (
                <View style={styles.inputContainer}>
                  <TextInput
                    label=""
                    value={text}
                    onChangeText={textInput =>
                      this.setState({ text: textInput })
                    }
                    secureTextEntry
                  />
                </View>
              ) : null}
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.updateCounter()}
                >
                  <Text style={styles.buttonText}>
                    {Dictionary.general.advanced}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
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
