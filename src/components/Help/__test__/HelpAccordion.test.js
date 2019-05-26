import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
} from 'react-native-testing-library';
import { List } from 'react-native-paper';
import wait from 'waait';
import { HelpAccordion } from '../';
import Dictionary from '../../../conf/dictionary';

describe('Render tests', () => {
  it('renders correctly', () => {
    const props = {
      phoneFunction: jest.fn(),
      emailFuncion: jest.fn(),
    };
    const { getByText } = render(<HelpAccordion {...props} />);
    expect(getByText(Dictionary.help.title)).toBeTruthy();
  });
  it('shows the two items inside the accordion', async () => {
    const props = {
      phoneFunction: jest.fn(),
      emailFuncion: jest.fn(),
    };
    const { getByText, getAllByType } = render(<HelpAccordion {...props} />);
    fireEvent.press(getByText(Dictionary.help.title));
    const list = await waitForElement(() => getAllByType(List.Item));
    expect(list.length).toBe(2);
  });
  it('calls phoneFunction on first List item press', async () => {
    const props = {
      phoneFunction: jest.fn(),
      emailFunction: jest.fn(),
    };
    const { getByText, getAllByType } = render(<HelpAccordion {...props} />);
    fireEvent.press(getByText(Dictionary.help.title));
    const list = await waitForElement(() => getAllByType(List.Item));
    fireEvent.press(list[0]);
    await wait(1);
    expect(props.phoneFunction).toHaveBeenCalled();
  });
  it('calls emailFunction on second List item press', async () => {
    const props = {
      phoneFunction: jest.fn(),
      emailFunction: jest.fn(),
    };
    const { getByText, getAllByType } = render(<HelpAccordion {...props} />);

    fireEvent.press(getByText(Dictionary.help.title));
    const list = await waitForElement(() => getAllByType(List.Item));
    fireEvent.press(list[1]);
    await wait(1);
    expect(props.emailFunction).toHaveBeenCalled();
  });
});
