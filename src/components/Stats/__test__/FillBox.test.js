
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
  }

  const { getByText } = render(<FillBox {...props} />);

  it('it should find by text', async () => {
    let text = props.itemsTotal / props.finalTotal * 100;
    text = `${text} ${props.itemName}`
    expect(getByText(text)).toBeTruthy();
  });
});
