import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

type customExpandIconProps = {
  openName: string;
  closeName: string
}

export interface AccordionProps {
  children: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  expanded?: boolean;
  onPress?: () => any;
  left?: (props: { color: string }) => React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme?: ThemeShape;
  iconColor?: string;
  containerStyle?: any;
  customExpandIcon?: React.ComponentType<customExpandIconProps>;
  right?: React.ComponentType;
  hideBorderBottomWidth?: boolean;
}

export declare class Accordion extends React.Component<AccordionProps> {}