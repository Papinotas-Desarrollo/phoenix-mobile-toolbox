import { shallow } from 'enzyme';
import * as React from 'react';
import { Bundles } from '../../mocks/Bundles';
import { GraphQueryHandler } from '../GraphQueryHandler';

describe('Proptype check', () => {
  it('Callback proptypes defined', () => {
    expect(GraphQueryHandler.propTypes.children).toBeDefined();
  });
});
describe('Functionality', () => {
  it('getYearsRange to return array with strings', () => {
    const wrapper = shallow(
      <GraphQueryHandler>
        <React.Fragment />
      </GraphQueryHandler>
    );
    const years = wrapper.instance().getYearsRange();
    expect(years).toBeInstanceOf(Array);
    expect(years.length).toBeGreaterThan(0);
    expect(years[years.length - 1].toString()).toBe(new Date().getFullYear().toString());
  });
  it('orderedListByMonthDesc returns bundles by month', () => {
    const wrapper = shallow(
      <GraphQueryHandler>
        <React.Fragment />
      </GraphQueryHandler>
    );
    const months = wrapper.instance().orderedListByMonthDesc(Bundles(10));
    expect(months).toBeInstanceOf(Object);
    expect(months[Object.keys(months)[0]]).toBeInstanceOf(Array);
  });
  it('changeYear change current year on state', () => {
    const wrapper = shallow(
      <GraphQueryHandler>
        <React.Fragment />
      </GraphQueryHandler>
    );
    const testYear = '2019';
    wrapper.instance().changeYear(testYear);
    const { selectedYear: { year, firstDay, lastDay } } = wrapper.state();
    expect(year).toBe(testYear);
    expect(firstDay).toBe(new Date(testYear.toString(), '0', '1').toISOString());
    expect(lastDay).toBe(new Date(testYear.toString(), '11', '31').toISOString());
  });
});
