import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';
import { LoginScreen } from '../';

describe('Snapshot test', () => {
  it('With props snapshot', () => {
    const props = {
      source: {},
      bodyTitle: 'bodyTitle',
      bodySubtitle: 'bodySubtitle',
      beforeInputText: 'beforeInputText',
      firstInputPlaceholder: 'firstInputPlaceholder',
      secondInputPlaceholder: 'secondInputPlaceholder',
      onChangeEmail: jest.fn(),
      onChangePassword: jest.fn(),
      buttons: [<TouchableOpacity key="1" />, <TouchableOpacity key="2" />],
    };
    const tree = renderer.create(<LoginScreen {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Proptype check', () => {
  it('Callback proptypes defined', () => {
    expect(LoginScreen.propTypes.onChangeEmail).toBeDefined();
    expect(LoginScreen.propTypes.onChangePassword).toBeDefined();
  });
});
