import * as React from 'react';
import { StyleProp } from 'react-native';

export interface HelpAccordionProps{
  phoneFunction:()=>any;
  emailFunction:()=>any;
  }

export declare class HelpAccordion extends React.Component<HelpAccordionProps>{}