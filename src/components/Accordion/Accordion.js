/* @flow */

import color from 'color';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

type Theme = {
  dark: boolean,
  roundness: number,
  colors: {
    primary: string,
    background: string,
    surface: string,
    accent: string,
    error: string,
    text: string,
    disabled: string,
    placeholder: string,
    backdrop: string,
  },
  fonts: {
    regular: string,
    medium: string,
    light: string,
    thin: string,
  },
};

type Props = {|
  /**
   * Title text for the list accordion.
   */
  title: React.Node,
    /**
     * Description text for the list accordion.
     */
    description ?: React.Node,
    /**
     * Callback which returns a React element to display on the left side.
     */
    left ?: (props: { color: string }) => React.Node,
    /**
     * Whether the accordion is expanded
     * If this prop is provided, the accordion will behave as a "controlled component".
     * You'll need to update this prop when you want to toggle the component or on `onPress`.
     */
    expanded ?: boolean,
    /**
     * Function to execute on press.
     */
    onPress ?: () => mixed,
    /**
     * Content of the section.
     */
    children: React.Node,
      theme: Theme,
        style ?: any,
        iconColor: string,
|};

type State = {
  expanded: boolean,
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderBottomColor: colors.lineGray,
  },
  row: {
    flexDirection: 'row',
  },
  multiline: {
    height: 40,
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
  },
  item: {
    margin: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class ListAccordion extends React.Component<Props, State> {
  static displayName = 'List.Accordion';

  state = {
    expanded: this.props.expanded || false,
    iconColor: this.props.iconColor || colors.black,
  };

  handlePress = () => {
    if (this.props.expanded === undefined) {
      // Only update state of the `expanded` prop was not passed
      // If it was passed, the component will act as a controlled component
      this.setState(state => ({
        expanded: !state.expanded,
      }));
    }
  };

  render() {
    const { left, title, description, children, theme, style, onPress } = this.props;
    const { iconColor } = this.state;
    const descriptionColor = color(theme.colors.text)
      .alpha(0.54)
      .rgb()
      .string();

    const expanded =
      this.props.expanded !== undefined
        ? this.props.expanded
        : this.state.expanded;
    return (
      <View>
        <TouchableOpacity
          style={[styles.container, style, { borderBottomWidth: expanded ? 0 : 1, }]}
          onPress={onPress || this.handlePress}
          accessibilityTraits="button"
          accessibilityComponentType="button"
          accessibilityRole="button"
        >
          <View style={styles.row} pointerEvents="none">
            {left
              ? left({
                color: expanded ? theme.colors.primary : descriptionColor,
              })
              : null}
            <View style={[styles.item, styles.content]}>
              {title}
              {description && (
                <Text
                  numberOfLines={2}
                  style={[
                    styles.description,
                    {
                      color: descriptionColor,
                    },
                  ]}
                >
                  {description}
                </Text>
              )}
            </View>
            <View style={[styles.item, description && styles.multiline, styles.icon]}>
              <Icon
                color={iconColor}
                name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={24}
              />
            </View>
          </View>
        </TouchableOpacity>
        {expanded
          ? children
          : null}
      </View>
    );
  }
}

export default withTheme(ListAccordion);
