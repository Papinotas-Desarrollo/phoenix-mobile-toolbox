import { shallow } from 'enzyme';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper';
import renderer from 'react-test-renderer';
import { ErrorView } from '../';

describe('Snapshot test', () => {
  it('With props snapshot', () => {
    const props = {
      error: '',
      resetError: jest.fn(),
    };
    const tree = renderer.create(<ErrorView {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Functionality test', () => {
  it('Open Modal', () => {
    const props = {
      error: '',
      resetError: jest.fn(),
    };
    const wrapper = shallow(<ErrorView {...props} />);

    expect(wrapper.state().visible).toBeFalsy();
    wrapper
      .find(Appbar.Action)
      .first()
      .props()
      .onPress();
    expect(wrapper.state().visible).toBeTruthy();
  });

  it('Click > 10 times to show TextInput', async () => {
    const props = {
      error: '',
      resetError: jest.fn(),
    };
    const wrapper = shallow(<ErrorView {...props} />);
    const button = wrapper
      .find(TouchableOpacity)
      .at(1)
      .props();
    expect(wrapper.find(TextInput).length).toBe(0);
    expect(wrapper.state().counter).toBe(0);
    button.onPress(); // 1
    button.onPress(); // 2
    button.onPress(); // 3
    button.onPress(); // 4
    button.onPress(); // 5
    button.onPress(); // 6
    button.onPress(); // 7
    button.onPress(); // 8
    button.onPress(); // 9
    button.onPress(); // 10
    expect(wrapper.find(TextInput).length).toBe(0);
    button.onPress(); // 11
    expect(wrapper.state().counter).toBe(11);
    expect(wrapper.find(TextInput).length).toBe(1);
  });
});
