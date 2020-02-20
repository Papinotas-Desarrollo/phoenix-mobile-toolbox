import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dictionary from '../../conf/dictionary';
import colors from '../../styles/colors';
import { hexToRgbAWithOpacity } from '../../utils';

const styles = StyleSheet.create({
  percentComponent: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: colors.white,
  },
  fillbox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
  },
  fillboxBackground: {
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 5,
  },
  itemNameContainer: {
    justifyContent: 'flex-start',
    marginLeft: 10,
    paddingVertical: 5,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

const getTotalPercentage = ({ itemsTotal, finalTotal }) =>
  Math.round((itemsTotal / finalTotal) * 100);

const totalPercentageComponent = ({ itemsTotal, finalTotal }) => (
  <Text style={styles.percentComponent}>
    {getTotalPercentage({ itemsTotal, finalTotal })}
    {Dictionary.fillbox.percent}
  </Text>
);

/**
 * Example:
 * 
 *  <FillBox
      backgroundColor="#42cef5"
      itemsTotal={20}
      finalTotal={100}
      itemName="Positives"
    />
 */

const FillBox = ({
  backgroundColor,
  itemsTotal,
  itemName,
  finalTotal,
  style: customStyles,
}) => (
    <View style={customStyles}>
      <View
        style={[
          styles.fillbox,
          { backgroundColor: hexToRgbAWithOpacity(backgroundColor) },
        ]}
        testID="outer-container">
        <View
          style={[
            styles.fillboxBackground,
            {
              backgroundColor,
              width: `${getTotalPercentage({ itemsTotal, finalTotal })}%`,
            },
          ]}
          testID="inner-container">
          {getTotalPercentage({ itemsTotal, finalTotal }) > 20 &&
            totalPercentageComponent({ itemsTotal, finalTotal })}
        </View>
        {getTotalPercentage({ itemsTotal, finalTotal }) <= 20 &&
          totalPercentageComponent({ itemsTotal, finalTotal })}
      </View>
      <View style={styles.itemNameContainer}>
        <Text
          style={styles.itemName}
          testID="fillbox-itemName">{`${itemsTotal} ${itemName}`}</Text>
      </View>
    </View>
  );

FillBox.propTypes = {
  backgroundColor: PropTypes.string,
  finalTotal: PropTypes.number,
  itemsTotal: PropTypes.number,
  itemName: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

FillBox.defaultProps = {
  backgroundColor: colors.black,
  finalTotal: 0,
  itemsTotal: 0,
  itemName: '',
  style: {},
};

export default FillBox;
