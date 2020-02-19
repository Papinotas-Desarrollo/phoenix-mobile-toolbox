import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { hexToRgbAWithOpacity } from '../../utils';

const styles = StyleSheet.create({
  percentComponent: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
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

const getTotalPercentage = ({ itemsTotal, finalTotal }) => Math.round((itemsTotal / finalTotal) * 100)

const totalPercentageComponent = ({ itemsTotal, finalTotal }) => (
  <Text style={styles.percentComponent}>
    {getTotalPercentage({ itemsTotal, finalTotal })} {Dictionary.classbook.percent}
  </Text>
)

/**
 * Example:
 * 
 *  <FillBox
      backgroundColor="#42cef5"
      itemsTotal={20}
      finalTotal={100}
      itemName="Positivas"
    />
 */

const FillBox = ({ backgroundColor, itemsTotal, itemName, finalTotal }) => (
  <>
    <View
      style={[
        styles.fillbox,
        { backgroundColor: hexToRgbAWithOpacity(backgroundColor) },
      ]}
    >
      <View
        style={[
          styles.fillboxBackground,
          {
            backgroundColor,
            width: `${getTotalPercentage({ itemsTotal, finalTotal })}%`,
          }
        ]}>
        {getTotalPercentage({ itemsTotal, finalTotal }) > 20 && totalPercentageComponent({ itemsTotal, finalTotal })}
      </View>
      {getTotalPercentage({ itemsTotal, finalTotal }) <= 20 && totalPercentageComponent({ itemsTotal, finalTotal })}
    </View>
    <View style={styles.itemNameContainer}>
      <Text style={styles.itemName} testID="fillbox-itemName">{`${itemsTotal} ${itemName}`}</Text>
    </View>
  </>
)

FillBox.propTypes = {
  backgroundColor: PropTypes.string,
  finalTotal: PropTypes.number,
  itemsTotal: PropTypes.number,
  itemName: PropTypes.string,
}

FillBox.defaultProps = {
  backgroundColor: colors.black,
  finalTotal: 0,
  itemsTotal: 0,
  itemName: '',
}

export default FillBox;