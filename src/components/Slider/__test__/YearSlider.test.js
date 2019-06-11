import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { fireEvent, render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import Chip from '../Chip';
import YearSlider from '../YearSlider';

describe('Snapshot test', () => {
  it('With props snapshot', () => {
    const props = {
      data: [2018, 2019, 2020],
      selected: 2020,
      onPressSelection: jest.fn(),
      refresh: null,
    };
    const tree = renderer.create(<YearSlider {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Proptype check', () => {
  it('Callback proptypes defined', () => {
    expect(YearSlider.propTypes.data).toBeDefined();
    expect(YearSlider.propTypes.selected).toBeDefined();
    expect(YearSlider.propTypes.onPressSelection).toBeDefined();
    expect(YearSlider.propTypes.refresh).toBeDefined();
  });
});
describe('Functionality', () => {
  it('Three Chip children should be render', () => {
    const props = {
      data: [2018, 2019, 2020],
      selected: 0,
      onPressSelection: jest.fn(),
      refresh: null,
    };
    const { queryAllByType } = render(<YearSlider {...props} />);
    expect(queryAllByType(Chip).length).toBe(3);
  });
  it('Call refetch button', () => {
    const buttonCallback = jest.fn();
    const refreshButton = (
      <TouchableOpacity testID="refreshButton" onPress={buttonCallback} />
    );
    const props = {
      data: [2018, 2019, 2020],
      selected: 0,
      onPressSelection: jest.fn(),
      refresh: refreshButton,
    };
    const { getByTestId } = render(<YearSlider {...props} />);
    fireEvent.press(getByTestId('refreshButton'));
    expect(buttonCallback).toHaveBeenCalled();
  });
});
