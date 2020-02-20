import React from 'react';
import { render } from 'react-native-testing-library';
import FillBox from '../FillBox';

describe('FillBox render ::', () => {
  const { getByTestId } = render(<FillBox />);

  it('it should render', async () => {
    expect(getByTestId('fillbox-itemName')).toBeTruthy();
  });
});

describe('FillBox render with props ::', () => {
  const props = {
    finalTotal: 100,
    itemsTotal: 20,
    itemName: 'Item',
  };

  it('it should find by text', () => {
    const { getByText } = render(<FillBox {...props} />);
    let text = (props.itemsTotal / props.finalTotal) * 100;
    text = `${text} ${props.itemName}`;
    expect(getByText(text)).toBeTruthy();
  });

  it('it should find percent text on outer container when % less than 21', () => {
    const { getByText } = render(<FillBox {...props} />);
    let text = (props.itemsTotal / props.finalTotal) * 100;
    text = `${text}%`;
    expect(getByText(text).parent.props.testID).toBe('outer-container');
  });

  it('it should find percent text on outer container when % greater than 20', () => {
    const newProps = {
      ...props,
      itemsTotal: 21,
    };
    const { getByText } = render(<FillBox {...newProps} />);
    let text = (newProps.itemsTotal / newProps.finalTotal) * 100;
    text = `${text}%`;
    expect(getByText(text).parent.props.testID).toBe('inner-container');
  });
});
