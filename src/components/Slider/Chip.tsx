// @flow
import PropTypes from 'prop-types';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  containerChip: {
    padding: 10,
    marginHorizontal: 5,
  },
  selectedChip: {
    borderBottomColor: colors.papinotasOrange,
    borderBottomWidth: 2,
  },
  selectedTextChip: {
    color: colors.slider.active,
    fontWeight: '600',
  },
  textProps: {
    color: colors.slider.inactive,
    fontSize: 14,
  },
});

interface ChipProps {
  id?: number;
  value: number;
  selected: boolean;
  onPressSelection: Function;
}

const Chip: FunctionComponent<ChipProps> = ({ id, value, selected, onPressSelection }) => (
  <TouchableOpacity
    onPress={() => onPressSelection(id || value)}
    style={[styles.containerChip, selected ? styles.selectedChip : null]}
    disabled={selected}
  >
    <Text style={[styles.textProps, selected ? styles.selectedTextChip : null]}>
      {value}
    </Text>
  </TouchableOpacity>
);

Chip.propTypes = {
  id: PropTypes.number,
  value: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onPressSelection: PropTypes.func.isRequired,
};

Chip.defaultProps = {
  id: null,
};

export default Chip;
