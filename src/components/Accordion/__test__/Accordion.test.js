import React from 'react';
import { Button, Text, TouchableOpacity } from 'react-native';
import { fireEvent, render } from 'react-native-testing-library';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Accordion } from '../';
import colors from '../../../styles/colors';

const children = [
  <Button key="1" title="test" />,
  <Button key="2" title="test" />,
  <Button key="3" title="test" />,
  <Button key="4" title="test" />,
];

describe('Render tests', () => {
  it('renders but get no items if not expanded', async () => {
    const props = {
      left: jest.fn(),
      title: <Text />,
      description: <Text />,
      children,
      theme: {},
      style: {},
    };
    const { queryAllByType } = render(<Accordion {...props} />);
    expect(queryAllByType(Button).length).toBe(0);
  });
  it('renders but get items if expanded', async () => {
    const props = {
      left: jest.fn(),
      title: <Text />,
      description: <Text />,
      children,
      theme: {},
      style: {},
    };
    const { queryAllByType, getByType } = render(<Accordion {...props} />);
    const touchable = getByType(TouchableOpacity);
    fireEvent.press(touchable);
    expect(queryAllByType(Button).length).toBe(4);
  });
  it('renders with black color', async () => {
    const props = {
      left: jest.fn(),
      title: <Text />,
      description: <Text />,
      children,
      theme: {},
      style: {},
    };
    const { getByType } = render(<Accordion {...props} />);
    const iconElement = getByType(Icon);

    expect(iconElement.props.color).toBe(colors.black);
  });
  it('renders with papinotasBlue', async () => {
    const props = {
      left: jest.fn(),
      title: <Text />,
      description: <Text />,
      children,
      theme: {},
      style: {},
      iconColor: colors.papinotasBlue,
    };
    const { getByType } = render(<Accordion {...props} />);
    const iconElement = getByType(Icon);
    expect(iconElement.props.color).toBe(colors.papinotasBlue);
  });
});
