import * as React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { ErrorView } from '../';
import colors from '../../../styles/colors';

describe('Snapshot test', () => {
  it('With props snapshot', () => {
    const tree = renderer.create(<ErrorView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Functionality test', () => {
  it('With props snapshot', () => {
    const tree = renderer.create(<ErrorView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
