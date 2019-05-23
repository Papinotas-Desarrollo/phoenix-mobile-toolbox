import React from 'react';
import { StyleSheet, Linking, Platform, Alert } from 'react-native';
import Proptypes from 'prop-types';
import colors from '../../styles/colors';
import { List } from 'react-native-paper';
import Dictionary from '../../conf/dictionary';

const styles = StyleSheet.create({
  borderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lineGray,
  },
});

checkApp = emailBody =>
  new Promise(resolve => {
    const apps = [
      { name: 'Mail', uri: 'mailto:' },
      { name: 'Outlook', uri: 'ms-outlook://' },
      { name: 'Gmail', uri: 'googlegmail://' },
      { name: 'Airmal', uri: 'airmail://' },
      { name: 'Spark', uri: 'readdle-spark://' },
    ];
    const alertText = [
      {
        text: 'Cancelar',
        onPress: () => console.log('CANCEL: Email Error Response'),
      },
    ];
    apps.forEach((app, index) => {
      Linking.canOpenURL(app.uri)
        .then(res => {
          if (res === true) {
            if (app.name === 'Gmail') {
              alertText.push({
                text: app.name,
                onPress: () =>
                  Linking.openURL(
                    `${app.uri}co?to=${Dictionary.help.emailAdress}&subject=${
                      Dictionary.help.emailTitle
                    }&body=${emailBody}`
                  ),
              });
            } else {
              alertText.push({
                text: app.name,
                onPress: () =>
                  Linking.openURL(
                    `${app.uri}compose?to=${
                      Dictionary.help.emailAdress
                    }&subject=${Dictionary.help.emailTitle}&body=${emailBody}`
                  ),
              });
            }
          }
        })
        .catch(error => {
          console.log('error');
        });
    });
    resolve(alertText);
  });

export const sendEmail = async (
  appVersion,
  phone,
  osVersion,
  currentAccount,
  error = ''
) => {
  const emailBody = currentAccount.first_name
    ? `${Dictionary.help.name}${currentAccount.first_name}${
        currentAccount.last_name
      }
  ${Dictionary.help.institution}${currentAccount.institution.name}
  ${Dictionary.help.phoneNumber}${currentAccount.phone_number}
  ${Dictionary.help.email}${currentAccount.email}
  ${Dictionary.help.appVersion}${appVersion} 
  ${Dictionary.help.phone}${phone}
  ${Dictionary.help.osVersion}${osVersion}
  ${Dictionary.help.error}${error}`
    : `${Dictionary.help.phoneNumber}${currentAccount.phone_number}
  ${Dictionary.help.appVersion}${appVersion} 
  ${Dictionary.help.phone}${phone}
  ${Dictionary.help.osVersion}${osVersion}
  ${Dictionary.help.error}${error}`;

  const options = await checkApp(emailBody);
  if (Platform.OS === 'ios') {
    Linking.canOpenURL('mailto:').then(res => {
      Alert.alert(
        Dictionary.help.emailAlert,
        Dictionary.help.emailAlertDescription,
        options,
        { cancelable: true }
      );
    });
  } else {
    Linking.openURL(
      `mailto:${Dictionary.help.emailAdress}?subject=${
        Dictionary.help.emailTitle
      }&body=${emailBody}`
    );
  }
};

const HelpAccordion = ({ appVersion, phone, osVersion, currentAccount }) => (
  <List.Accordion
    style={styles.borderStyle}
    title={Dictionary.help.title}
    left={() => <List.Icon icon="help" />}
  >
    <List.Item
      style={styles.borderStyle}
      title={Dictionary.help.call}
      onPress={() => {
        Linking.openURL(`tel:${Dictionary.help.supportPhoneNumber}`);
      }}
      right={() => <List.Icon icon="phone" />}
      rippleColor={colors.papinotasOrange}
    />
    <List.Item
      style={styles.borderStyle}
      title={Dictionary.help.mail}
      onPress={() => {
        sendEmail(appVersion, phone, osVersion, currentAccount);
      }}
      right={() => <List.Icon icon="mail" />}
      rippleColor={colors.papinotasOrange}
    />
  </List.Accordion>
);

HelpAccordion.propTypes = {
  appVersion: Proptypes.string.isRequired,
  phone: Proptypes.string.isRequired,
  osVersion: Proptypes.string.isRequired,
};

export default HelpAccordion;
