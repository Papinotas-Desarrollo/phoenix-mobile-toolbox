import * as React from 'react';
import { StyleProp, ViewStyle, ViewProps, TouchableOpacityProps, ImageSourcePropType } from 'react-native';
import { LoginHeader } from '../../src/components/Login';

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
}

export interface LoginButtonsProps{
  buttons: React.ReactNodeArray;
}

export declare class LoginScreen extends React.Component<LoginHeaderProps, LoginBodyProps, LoginButtonsProps> {}
export declare class LoginHeader extends React.Component<LoginHeaderProps>{}
export declare class LoginBody extends React.Component<LoginBodyProps>{}
export declare class LoginButtons extends React.Component<LoginButtonsProps>{}