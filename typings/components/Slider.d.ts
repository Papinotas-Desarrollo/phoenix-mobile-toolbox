import * as React from 'react';

interface YearSliderProps {
  data: Array<string>;
  selected: string;
  onPressSelection: Function;
  refresh: React.ReactNode;
}

export declare class YearSlider extends React.Component<YearSliderProps> {}