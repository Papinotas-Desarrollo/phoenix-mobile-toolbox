import * as React from 'react';
import { StyleProp } from 'react-native';

export interface ErrorBoundaryProps{
  secure?: String;
  style?: StyleProp;
  children: React.ReactChild;
  phoneFunction: () => any;
  emailFunction: () => any;
}

export declare class ErrorBoundaryWrapper extends React.Component<ErrorBoundaryProps>{}