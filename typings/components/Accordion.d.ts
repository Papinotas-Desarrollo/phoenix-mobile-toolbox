import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface AccordionProps {
  children: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  expanded?: boolean;
  onPress?: () => any;
  left?: (props: { color: string }) => React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme?: ThemeShape;
}

export declare class Accordion extends React.Component<AccordionProps> {}