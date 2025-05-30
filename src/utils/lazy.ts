import { lazy } from 'react';

export const lazyNamed = <T extends React.ComponentType<any>>(
  loader: Promise<{ [key: string]: T }>,
  exportName: string
) => {
  return lazy(() =>
    loader.then(module => ({
      default: module[exportName] as T
    }))
  );
};