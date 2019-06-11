import { shallow } from 'enzyme';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';
import Chip from '../Chip';

describe('Snapshot test', () => {
  it('With props snapshot', () => {
    const props = {
      name: 'item1',
      selected: false,
      onPressSelection: jest.fn(),
    };
    const tree = renderer.create(<Chip {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Proptype check', () => {
  it('Callback proptypes defined', () => {
    expect(Chip.propTypes.id).toBeDefined();
    expect(Chip.propTypes.name).toBeDefined();
    expect(Chip.propTypes.selected).toBeDefined();
    expect(Chip.propTypes.onPressSelection).toBeDefined();
  });
});
describe('Functionality', () => {
  it('onPressSelection function to be called', () => {
    const props = {
      name: 'item1',
      selected: false,
      onPressSelection: jest.fn(),
    };
    const wrapper = shallow(<Chip {...props} />);
    wrapper
      .find(TouchableOpacity)
      .at(0)
      .props()
      .onPress();
    expect(props.onPressSelection).toHaveBeenCalled();
  });
});
