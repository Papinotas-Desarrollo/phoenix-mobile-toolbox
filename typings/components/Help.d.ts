import * as React from 'react';
import { StyleProp } from 'react-native';

export interface HelpAccordionProps{
  appVersion?: string;
  phone?: string;
  osVersion?: string;
  currentAccount?:Object;
  }

export declare const sendEmail:{
    appVersion?: string;
    phone?: string;
    osVersion?: string;
    currentAccount?:Object;
    error?:string;
}

export declare class HelpAccordion extends React.Component<HelpAccordionProps>{}