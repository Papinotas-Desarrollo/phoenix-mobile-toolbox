import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import { SideMenuBody } from '../';
import { Text } from 'react-native';
import Dictionary from '../../../conf/dictionary';

const childrenProp = [
  <Text key="text1">Text1</Text>,
  <Text key="text2">Text2</Text>,
  <Text key="text3">Text3</Text>,
];

describe('Render tests', () => {
  it('should render when there are no children', () => {
    const props = {
      children: [],
    };
    const { getByText } = render(<SideMenuBody {...props} />);
    const view = getByText(Dictionary.noChildren);
    expect(view.children.length).toBe(1);
  });
  it('should render when there are children', () => {
    const props = {
      children: childrenProp,
    };
    const { getByType } = render(<SideMenuBody {...props} />);
    const view = getByType('View');
    expect(view.children.length).toBe(3);
  });
});
