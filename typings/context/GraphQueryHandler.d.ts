import * as React from 'react';

type Provider<T> = React.ComponentType<{
  value: T;
  children?: ReactNode;
}>;

type Consumer<T> = React.ComponentType<{
  children: (value: T) => ReactNode;
}>

interface GraphQueryHandlerContextProps<T> {
  Provider: Provider<T>;
  Consumer: Consumer<T>;
}

export const GraphQueryHandlerContext = React.createContext<GraphQueryHandlerContextProps>({});
export declare class GraphQueryHandler extends React.Component {}