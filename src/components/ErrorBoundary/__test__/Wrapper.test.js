import { shallow } from 'enzyme';
import * as React from 'react';
import { ErrorBoundaryWrapper } from '../';

describe('Snapshot test ::', () => {
  it('With props snapshot', () => {
    const props = {
      secure: '',
      styles: {},
      children: [],
    };
    const tree = shallow(
      <ErrorBoundaryWrapper {...props}>
        <React.Fragment />
      </ErrorBoundaryWrapper>
    );
    expect(tree).toMatchSnapshot();
  });
});
