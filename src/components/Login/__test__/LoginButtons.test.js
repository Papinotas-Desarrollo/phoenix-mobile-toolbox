import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { LoginButtons } from '../';

describe('Snapshot test', () => {
  it('No buttons snapshot', () => {
    const buttons = [];
    const tree = shallow(<LoginButtons>{buttons}</LoginButtons>);
    expect(tree).toMatchSnapshot();
    expect(tree.children().length).toBe(0);
  });
  it('With buttons snapshot', () => {
    const buttons = [
      <TouchableOpacity key="1" />,
      <TouchableOpacity key="2" />,
    ];

    const tree = shallow(<LoginButtons>{buttons}</LoginButtons>);
    expect(tree).toMatchSnapshot();
    expect(tree.children().length).toBe(2);
  });
});
