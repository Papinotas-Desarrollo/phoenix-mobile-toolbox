import PropTypes from 'prop-types';
import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import Chip from './Chip';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.slider.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 15,
  },
});

interface YearSliderProps {
  data: ReadonlyArray<number>;
  selected: number;
  onPressSelection: Function;
  refresh?: React.ReactNode;
}

const YearSlider: React.FunctionComponent<YearSliderProps> = ({
  data,
  selected,
  onPressSelection,
  refresh,
}) => (
    <View style={styles.container}>
      <Icon style={styles.icon} size={20} name="access-time" color={colors.white} />
      <FlatList<number>
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.toString()}
        extraData={selected}
        renderItem={({ item }) => (
          <Chip
            onPressSelection={onPressSelection}
            selected={selected === item}
            value={item}
          />
        )}
      />
      { refresh && refresh }
    </View>
  );

YearSlider.propTypes = {
  data: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  onPressSelection: PropTypes.func.isRequired,
  refresh: PropTypes.any,
};

YearSlider.defaultProps = {
  refresh: [],
};

export default YearSlider;
