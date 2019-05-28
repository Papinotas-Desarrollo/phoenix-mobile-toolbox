import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { fireEvent, render } from 'react-native-testing-library';
import { Accordion } from '../';

const children = [
  <TouchableOpacity key="1" />,
  <TouchableOpacity key="2" />,
  <TouchableOpacity key="3" />,
  <TouchableOpacity key="4" />,
];

describe('Render tests', () => {
  it('renders but get no items if not expanded', async () => {
    const props = {
      left: jest.fn(),
      title: 'Test',
      description: <Text />,
      children,
      theme: {},
      style: {},
    };
    const { queryAllByType } = render(<Accordion {...props} />);


    expect(queryAllByType(TouchableOpacity).length).toBe(0);
  });
  it('renders but get items if expanded', async () => {
    const props = {
      left: jest.fn(),
      title: 'Test',
      description: <Text />,
      children,
      theme: {},
      style: {},
    };
    const { queryAllByType, getByType } = render(<Accordion {...props} />);
    const touchable = getByType(TouchableRipple);
    fireEvent.press(touchable);

    expect(queryAllByType(TouchableOpacity).length).toBe(4);
  });
});
