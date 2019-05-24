import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
} from 'react-native-testing-library';
import { List } from 'react-native-paper';
import { Linking, Platform, Alert } from 'react-native';
import wait from 'waait';
import { HelpAccordion } from '../';
import Dictionary from '../../../conf/dictionary';

describe('Render tests', () => {
  it('renders correctly', () => {
    const props = {
      appVersion: '',
      phone: '',
      osVersion: '',
      currentAccount: {},
    };
    const { getByText } = render(<HelpAccordion {...props} />);
    expect(getByText(Dictionary.help.title)).toBeTruthy();
  });
  it('shows the two items inside the accordion', async () => {
    const props = {
      appVersion: '',
      phone: '',
      osVersion: '',
      currentAccount: {},
    };
    const { getByText, getAllByType } = render(<HelpAccordion {...props} />);
    fireEvent.press(getByText(Dictionary.help.title));
    const list = await waitForElement(() => getAllByType(List.Item));
    expect(list.length).toBe(2);
  });
  it('calls Linking on first List item press', async () => {
    const props = {
      appVersion: '',
      phone: '',
      osVersion: '',
      currentAccount: {},
    };
    const { getByText, getAllByType } = render(<HelpAccordion {...props} />);
    fireEvent.press(getByText(Dictionary.help.title));
    const list = await waitForElement(() => getAllByType(List.Item));
    const spy = jest.spyOn(Linking, 'openURL');
    fireEvent.press(list[0]);
    expect(spy).toHaveBeenCalled();
  });
  it('calls canOpenURL function and then displays an Alert on iOS', async () => {
    Platform.os = 'ios';
    const props = {
      appVersion: '',
      phone: '',
      osVersion: '',
      currentAccount: {},
    };
    const { getByText, getAllByType } = render(<HelpAccordion {...props} />);

    fireEvent.press(getByText(Dictionary.help.title));
    const list = await waitForElement(() => getAllByType(List.Item));
    const spy = jest.spyOn(Linking, 'canOpenURL');
    const spy2 = jest.spyOn(Alert, 'alert');
    fireEvent.press(list[1]);
    await wait(1);
    expect(spy).toBeCalled();
    expect(spy2).toBeCalled();
  });
  it('calls openURL function on android', async () => {
    Platform.os = 'android';
    const props = {
      appVersion: '',
      phone: '',
      osVersion: '',
      currentAccount: {},
    };
    const { getByText, getAllByType } = render(<HelpAccordion {...props} />);

    fireEvent.press(getByText(Dictionary.help.title));
    const list = await waitForElement(() => getAllByType(List.Item));
    const spy = jest.spyOn(Linking, 'openURL');
    fireEvent.press(list[1]);
    await wait(1);
    expect(spy).toBeCalled();
  });
});
