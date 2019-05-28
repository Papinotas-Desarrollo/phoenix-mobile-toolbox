import Proptypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import Dictionary from '../../conf/dictionary';
import { Accordion } from '../Accordion';
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
 *        styleAccordion: {},
 *        styleItem: {},
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
  icon: {
    marginLeft: 0,
  }
});

const HelpAccordion = ({
  styleAccordion,
  styleItem,
  phoneFunction,
  emailFunction,
  theme,
}) => (
    <Accordion
      theme={theme}
      style={styleAccordion}
      title={Dictionary.help.title}
      left={() => <List.Icon icon="help" style={styles.icon} />}
    >
      <List.Item
        theme={theme}
        style={styleItem}
        title={Dictionary.help.call}
        onPress={() => {
          phoneFunction();
        }}
        right={() => <List.Icon icon="phone" />}
      />
      <List.Item
        style={styleItem}
        title={Dictionary.help.mail}
        onPress={() => {
          emailFunction();
        }}
        right={() => <List.Icon icon="mail" />}
      />
    </Accordion>
  );

HelpAccordion.propTypes = {
  styleAccordion: Proptypes.instanceOf(Object),
  styleItem: Proptypes.instanceOf(Object),
  phoneFunction: Proptypes.func.isRequired,
  emailFunction: Proptypes.func.isRequired,
  theme: Proptypes.instanceOf(Object),
};

HelpAccordion.defaultProps = {
  styleAccordion: {},
  styleItem: {},
  theme: {},
};

export default HelpAccordion;
