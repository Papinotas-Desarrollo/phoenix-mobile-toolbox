import * as React from 'react';
import { StyleProp, ViewStyle, ViewProps } from 'react-native';

export interface LoginHeaderProps{
  uri?: React.Node,
}

export declare class LoginHeaderInterface extends React.Component<LoginHeaderProps> {}

export interface LoginBodyProps{
  bodyTitle?: React.ReactNode,
  bodySubtitle?: React.ReactNode,
  beforeInputText?: React.ReactNode,
  firstInputPlaceholder?: React.ReactNode,
  secondInputPlaceholder?: React.ReactNode,
}

export declare class LoginBodyInterface extends React.Component<LoginBodyProps> {}

export interface LoginButtonsProps{
  buttons: React.ReactNodeArray,
}

export declare class LoginButtonsInterface extends React.Component<LoginButtonsProps> {}

export declare class LoginScreenInterface extends React.Component<LoginHeaderProps, LoginBodyProps, LoginButtonsProps> {}