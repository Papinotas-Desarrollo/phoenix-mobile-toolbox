import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { fireEvent, render } from 'react-native-testing-library';
import { SideMenuBody } from '../';
import Dictionary from '../../../conf/dictionary';

const childrenLength = 20;
const childrenCallback = jest.fn();
const childrenProp = Array.from({ length: childrenLength }).map(
  (item, index) => (
    <TouchableOpacity
      onPress={childrenCallback}
      key={`item-${index}`}
      testID="scrollview-children">
      <Text>{`Texto${index}`}</Text>
    </TouchableOpacity>
  )
);

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
    const { getAllByTestId } = render(<SideMenuBody {...props} />);
    const touchables = getAllByTestId('scrollview-children');
    expect(touchables.length).toBe(childrenLength);
  });
  it('should scroll and select last item', async () => {
    const props = {
      children: childrenProp,
      onScroll: jest.fn(),
    };
    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 999,
        },
      },
    };
    const { getByTestId, getAllByTestId } = render(<SideMenuBody {...props} />);
    const scrollview = getByTestId('sidemenu-body-scrollview');
    await fireEvent.scroll(scrollview, eventData);
    fireEvent.press(getAllByTestId('scrollview-children')[19]);
    expect(childrenCallback).toHaveBeenCalled();
  });
});
