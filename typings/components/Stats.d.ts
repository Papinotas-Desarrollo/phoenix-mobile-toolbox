import * as React from 'react';
import { StyleProp } from 'react-native';


export interface StatsFillBox{
  backgroundColor: String;
  itemName: String;
  itemsTotal: Number;
  finalTotal: Number;
  style: StyleProp;
}

export declare class FillBox extends React.Component<StatsFillBox> {}