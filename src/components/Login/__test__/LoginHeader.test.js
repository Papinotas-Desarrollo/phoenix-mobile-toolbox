import * as React from 'react';
import { shallow } from 'enzyme';
import { Image } from 'react-native';
import { LoginHeader } from '../';

describe('Snapshot test', () => {
  it('No props snapshot', () => {
    const tree = shallow(<LoginHeader />);
    expect(
      tree
        .children()
        .find(Image)
        .props().source
    ).toBe(undefined);
  });
  it('With props snapshot', () => {
    const src = '../assets/papinotascolegio.png';
    const props = {
      source: {
        src,
      },
    };
    const tree = shallow(<LoginHeader {...props} />);
    expect(tree.children().find(Image).length).toBe(1);
    expect(
      tree
        .children()
        .find(Image)
        .first()
        .props().source.src
    ).toBe(src);
  });
});
