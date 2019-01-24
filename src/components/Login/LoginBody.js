import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import Proptypes from 'prop-types';
import colors from '../../styles/colors';

const styles = StyleSheet.create({

});

const LoginBody = ({ bodyTitle, bodySubtitle, beforeInputText, firstInputPlaceholder, secondInputPlaceholder, }) => (
  <React.Fragment>
    <View style={{ backgroundColor: colors.papinotasBlue }}>
      <Text>{bodyTitle}</Text>
    </View>
    <View>
      <Text style={{ color: colors.papinotasOrange }}>
        {bodySubtitle}
      </Text>
      <Text>
        {beforeInputText}
      </Text>
      <TextInput
        style={{ width: '100%' }}
        placeholder={firstInputPlaceholder}
      />
      <TextInput
        style={{ width: '100%' }}
        placeholder={secondInputPlaceholder}
      />
    </View>
  </React.Fragment>
);

export default LoginBody;

LoginBody.propTypes = {
  bodyTitle: Proptypes.string,
  bodySubtitle: Proptypes.string,
  firstInputPlaceholder: Proptypes.string,
  secondInputText: Proptypes.string,
  secondInputPlaceholder: Proptypes.string,
}

LoginBody.default = {
  bodyTitle: "",
  bodySubtitle: "",
  firstInputPlaceholder: "",
  secondInputText: "",
  secondInputPlaceholder: "",
}