import React from 'react';
import { render } from 'react-native-testing-library';
import { SideMenuScreen } from '../';
import { Text, View } from 'react-native';
import Dictionary from '../../../conf/dictionary';

const childrenProp = [
  <Text key="text1">Text1</Text>,
  <Text key="text2">Text2</Text>,
  <Text key="text3">Text3</Text>,
];
const headerProp = [
  <View key="view1">
    <Text key="text4">Text4</Text>
  </View>,
];

describe('Render tests', () => {
  it('should render when there are no children', () => {
    const props = {
      containerStyle: {},
      buttons: [],
      header: [],
      headerStyle: {},
      bodyStyle: {},
    };
    const { getByTestId } = render(<SideMenuScreen {...props} />);

    const view = getByTestId('rootView');
    expect(view.children.length).toBe(1);
  });
  it('should render when it has children', () => {
    const props = {
      containerStyle: {},
      buttons: childrenProp,
      header: headerProp,
      headerStyle: {},
      bodyStyle: {},
    };
    const { getByTestId } = render(<SideMenuScreen {...props} />);

    const view = getByTestId('rootView');
    expect(view.children.length).toBe(1);
  });
});
