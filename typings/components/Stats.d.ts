import * as React from 'react';


export interface StatsFillBox{
  backgroundColor: String;
  itemName: String;
  itemsTotal: Number;
  finalTotal: Number;
}

export declare class FillBox extends React.Component<StatsFillBox> {}