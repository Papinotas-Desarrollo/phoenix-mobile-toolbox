import * as React from 'react';
import { StyleProp } from 'react-native';

export interface ErrorBoundaryProps{
  secure?: String;
  style?: StyleProp;
  children: React.ReactChild;
  account:()=>any;
  appVersion?: string;
  phoneInfo?: string;
  osVersion?: string;
}

export declare class ErrorBoundaryWrapper extends React.Component<ErrorBoundaryProps>{}