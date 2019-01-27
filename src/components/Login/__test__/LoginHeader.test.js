import * as React from 'react';
import { shallow } from 'enzyme';
import { Image } from 'react-native';
import { LoginHeader } from '../';

describe('Snapshot test', () => {
  it('No props snapshot', () => {
    const tree = shallow(<LoginHeader />);
    expect(tree).toMatchSnapshot();
    expect(tree.children().find(Image).length).toBe(0);
  });
  it('With props snapshot', () => {
    const source = require('../../../assets/papinotascolegio.png');
    const props = {
      source,
    };
    const tree = shallow(<LoginHeader {...props} />);
    expect(tree).toMatchSnapshot();
    expect(
      tree
        .children()
        .find(Image)
        .props().source.testUri
    ).toBe(source.testUri);
  });
});
