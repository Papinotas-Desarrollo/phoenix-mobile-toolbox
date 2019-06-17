import * as React from 'react';
import {ImageSourcePropType} from 'react-native';

export interface SideMenuHeaderProps{
    source?:ImageSourcePropType;
    headerStyle?:any;
    closeMenu:()=>any;
    headerTitle?:string;
    headerSubtitle?:string;
}

export interface SideMenuFooterProps{
    footerStyle?:object;
    callback?:()=>any;
}


export declare class SideMenuScreen extends React.Component<SideMenuHeaderProps>{}
export declare class SideMenuHeader extends React.Component<SideMenuHeaderProps>{}
export declare class SideMenuFooter extends React.Component<SideMenuFooterProps>{}