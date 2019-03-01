import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LoginBody } from '../';
import colors from '../../../styles/colors';

describe('Snapshot test', () => {
  it('With props snapshot', () => {
    const props = {
      bodyTitle: 'bodyTitle',
      bodySubtitle: 'bodySubtitle',
      beforeInputText: 'beforeInputText',
      firstInputPlaceholder: 'firstInputPlaceholder',
      secondInputPlaceholder: 'secondInputPlaceholder',
      onChangeEmail: jest.fn(),
      onChangePassword: jest.fn(),
    };
    const tree = renderer.create(<LoginBody {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Proptype check', () => {
  it('Callback proptypes defined', () => {
    expect(LoginBody.propTypes.onChangeEmail).toBeDefined();
    expect(LoginBody.propTypes.onChangePassword).toBeDefined();
  });
});
describe('Functionality', () => {
  it('Show password', () => {
    const props = {
      bodyTitle: '',
      bodySubtitle: '',
      beforeInputText: '',
      firstInputPlaceholder: '',
      secondInputPlaceholder: '',
      onChangeEmail: jest.fn(),
      onChangePassword: jest.fn(),
    };
    const wrapper = shallow(<LoginBody {...props} />)
    expect(wrapper.find(Icon).at(0).props().color).toBe(colors.papinotasBlue);
    wrapper.find(TouchableHighlight).at(0).props().onPress();
    expect(wrapper.find(Icon).at(0).props().color).toBe(colors.papinotasOrange);
  });
});
