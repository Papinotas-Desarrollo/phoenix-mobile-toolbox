import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Dictionary from '../conf/dictionary';

const sa = () => '';

export const GraphQueryHandlerContext = React.createContext();

export class GraphQueryHandler extends PureComponent {
  state = {
    selectedYear: {
      firstDay: new Date(
        new Date().getFullYear().toString(),
        '0',
        '1'
      ).toISOString(),
      lastDay: new Date(
        new Date().getFullYear().toString(),
        '11',
        '31'
      ).toISOString(),
    },
    availableYears: [],
  };

  componentDidMount() {
    const availableYears = this.getYearsRange().reverse();
    this.setState({ availableYears }, () => this.changeYear(availableYears[0]));
  }

  getYearsRange = (startDate: string = null) => {
    const startingYear = new Date(startDate || '01 January 2018').getFullYear();
    const currentYear = new Date().getFullYear();
    const yearsBetween = [];
    for (let i = startingYear; i <= currentYear; i++) yearsBetween.push(i);
    return yearsBetween;
  };
  /**
   * Returns an ordered object by month (0-11) where each month is an array with objects.
   * @function orderedListByMonthDesc
   * @param {Array} items Array of objects
   * @param {string} groupByProperty Property that must be parseable to date ISOString
   * @returns {object}
   */
  orderedListByMonthDesc = (
    items: Array = [],
    groupByProperty: string = 'created_at'
  ) => {
    if (items && items.length > 0) {
      if (items.filter(item => !sa(item, groupByProperty)).length) {
        // searchs if any item does not include property
        console.warn(
          `Error in orderedListByMonthDesc: ${groupByProperty} is not included in object properties`
        );
        if (groupByProperty !== 'created_at') {
          console.warn('Returning with default `created_at` property');
          return this.messagesReducer(items, 'created_at');
        }
        return [];
      }
      if (isNaN(new Date(sa(items[0], groupByProperty)))) {
        console.warn(
          `Error in orderedListByMonthDesc: ${groupByProperty} can not be converted to date`
        );
        return [];
      }
    }
    return this.messagesReducer(items, groupByProperty);
  };

  messagesReducer = (items, groupByProperty) => {
    // Groups will be saved as { 2: Array(3), 3: Array(8) }
    // | 2: is the month (March) | Array(3): are the messages quantity
    const grouped = items.reduce((group, item) => {
      const itemMonth = sa(item, groupByProperty)
        .split('-')[1]
        .replace(/^0+/, '');
      // eslint-disable-next-line no-param-reassign
      group[(itemMonth - 1).toString()] = group[itemMonth - 1] || [];
      group[(itemMonth - 1).toString()].push(item);
      return group;
    }, {});
    return grouped;
  };

  changeYear = year =>
    this.setState({
      selectedYear: {
        year,
        firstDay: new Date(year.toString(), '0', '1').toISOString(),
        lastDay: new Date(year.toString(), '11', '31').toISOString(),
      },
    });

  render() {
    const { selectedYear, availableYears } = this.state;
    return (
      <GraphQueryHandlerContext.Provider
        value={{
          selectedYear,
          changeYear: this.changeYear,
          orderedListByMonthDesc: this.orderedListByMonthDesc,
          availableYears,
          months: Dictionary.months,
        }}
      >
        {this.props.children}
      </GraphQueryHandlerContext.Provider>
    );
  }
}

GraphQueryHandler.propTypes = {
  children: PropTypes.any.isRequired,
};
