import React from 'react';
import { StyleSheet } from 'react-native';
import Proptypes from 'prop-types';
import colors from '../../styles/colors';
import { List } from 'react-native-paper';
import Dictionary from '../../conf/dictionary';

/**
 *
 * ## Usage
 * ```js
 *
 * import * as React from 'react';
 * import { HelpAccordion } from 'phoenix-mobile-toolbox';
 *
 * export default class HelpAccordionContainer extends React.Component {
 *
 *
 *    render(){
 *      const props = {
 *        phoneFunction: () => {},
 *        emailFunction: () => {},
 *      };
 *
 *      return <HelpAccordion {...props}/>
 *    }
 * }
 *
 * ```
 */

const styles = StyleSheet.create({
  borderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lineGray,
  },
});

const HelpAccordion = ({ phoneFunction, emailFunction }) => (
  <List.Accordion
    style={styles.borderStyle}
    title={Dictionary.help.title}
    left={() => <List.Icon icon="help" />}
  >
    <List.Item
      style={styles.borderStyle}
      title={Dictionary.help.call}
      onPress={() => {
        phoneFunction();
      }}
      right={() => <List.Icon icon="phone" />}
      rippleColor={colors.papinotasOrange}
    />
    <List.Item
      style={styles.borderStyle}
      title={Dictionary.help.mail}
      onPress={() => {
        emailFunction();
      }}
      right={() => <List.Icon icon="mail" />}
      rippleColor={colors.papinotasOrange}
    />
  </List.Accordion>
);

HelpAccordion.propTypes = {
  phoneFunction: Proptypes.func.isRequired,
  emailFunction: Proptypes.func.isRequired,
};

export default HelpAccordion;
