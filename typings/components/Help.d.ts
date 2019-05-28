import * as React from 'react';
import { StyleProp } from 'react-native';

export interface HelpAccordionProps{
  styleAccordion: StyleProp;
  styleItem: StyleProp;
  phoneFunction:()=>any;
  emailFunction:()=>any;
  theme: any;
  }

export declare class HelpAccordion extends React.Component<HelpAccordionProps>{}