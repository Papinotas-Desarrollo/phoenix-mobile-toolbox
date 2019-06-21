import * as React from 'react';
import {ImageSourcePropType} from 'react-native';

export interface SideMenuHeaderProps{
    children:React.ReactNodeArray;
    headerStyle?: any;
}

export interface SideMenuBodyProps{
    children:React.ReactNodeArray;
    bodyStyle?: any;
}

export interface SideMenuScreenProps{
    containerStyle?: any;
}
export declare class SideMenuScreen extends React.Component<SideMenuBodyProps,SideMenuHeaderProps,SideMenuScreenProps>{}
export declare class SideMenuHeader extends React.Component<SideMenuHeaderProps>{}
export declare class SideMenuBody extends React.Component<SideMenuBodyProps>{}