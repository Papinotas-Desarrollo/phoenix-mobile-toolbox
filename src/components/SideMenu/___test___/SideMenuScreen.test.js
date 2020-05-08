import React from 'react';
import { Text, View } from 'react-native';
import { render } from 'react-native-testing-library';
import { SideMenuScreen } from '../';

const childrenProp = [
  <Text key="text1">childrenProp</Text>,
  <Text key="text2">childrenProp</Text>,
  <Text key="text3">childrenProp</Text>,
];
const headerProp = [
  <View key="view1">
    <Text key="text4">headerProp</Text>
  </View>,
];

describe('Render tests', () => {
  it('should render when there are no children', () => {
    const props = {
      buttons: [],
      header: [],
      headerStyle: {},
      bodyStyle: {},
    };
    const { container } = render(<SideMenuScreen {...props} />);

    expect(container).toBeTruthy();
  });
  it('should render when it has children', () => {
    const props = {
      buttons: childrenProp,
      header: headerProp,
      headerStyle: {},
      bodyStyle: {},
    };
    const { getAllByText } = render(<SideMenuScreen {...props} />);

    const header = getAllByText('headerProp');
    const scrollViewChildren = getAllByText('childrenProp');
    expect(header.length).toBe(1);
    expect(scrollViewChildren.length).toBe(3);
  });
});
