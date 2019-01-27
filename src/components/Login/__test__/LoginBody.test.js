import * as React from 'react';
import renderer from 'react-test-renderer';
import { LoginBody } from '../';

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
