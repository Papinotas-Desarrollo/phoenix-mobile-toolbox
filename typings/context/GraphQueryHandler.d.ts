import * as React from 'react';

declare module React {
  type Provider<T> = React.ComponentType<{
    value: T;
    children?: ReactNode;
  }>;
  
  type Consumer<T> = React.ComponentType<{
    children: (value: T) => ReactNode;
    unstable_observedBits?: number;
  }>

  interface Context<T> {
    Provider: Provider<T>;
    Consumer: Consumer<T>;
    displayName?: string;
  }

  function createContext<T>(
    defaultValue: T,
    calculateChangedBits?: (prev: T, next: T) => number
  ): Context<T>;
}


export const GraphQueryHandlerContext = React.createContext();
export declare class GraphQueryHandler extends React.Component {}