import * as React from 'react';
import { ImageSourcePropType } from 'react-native';

export interface LoginHeaderProps{
  source?: ImageSourcePropType;
  headerStyle?: any;
}

export interface LoginBodyProps{
  bodyTitle?: string;
  bodySubtitle?: string;
  beforeInputText?: string;
  firstInputPlaceholder?: string;
  secondInputPlaceholder?: string;
  onChangeEmail: (value: string) => any;
  onChangePassword: (value: string) => any;
}

export interface LoginButtonsProps{
  children: React.ReactNodeArray;
}

export declare class LoginScreen extends React.Component<LoginHeaderProps, LoginBodyProps, LoginButtonsProps> {}
export declare class LoginHeader extends React.Component<LoginHeaderProps>{}
export declare class LoginBody extends React.Component<LoginBodyProps>{}
export declare class LoginButtons extends React.Component<LoginButtonsProps>{}