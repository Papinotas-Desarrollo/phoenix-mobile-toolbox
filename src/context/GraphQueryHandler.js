import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Dictionary from '../conf/dictionary';

export const GraphQueryHandlerContext = React.createContext();

export class GraphQueryHandler extends PureComponent {
  state = {
    selectedYear: {
      firstDay: new Date(new Date().getFullYear().toString(), '0', '1').toISOString(),
      lastDay: new Date(new Date().getFullYear().toString(), '11', '31').toISOString(),
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

  orderedListByMonthDesc = items => {
    // Groups will be saved as { 2: Array(3), 3: Array(8) }
    // | 2: is the month (March) | Array(3): are the messages quantity
    const grouped = items.reduce((group, item) => {
      const itemMonth = item.created_at.split('-')[1].replace(/^0+/, '');
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
        value={
          {
            selectedYear,
            changeYear: this.changeYear,
            orderedListByMonthDesc: this.orderedListByMonthDesc,
            availableYears,
            months: Dictionary.months,
          }
        }
      >
        {this.props.children}
      </GraphQueryHandlerContext.Provider>
    );
  }
}

GraphQueryHandler.propTypes = {
  children: PropTypes.any.isRequired,
};
