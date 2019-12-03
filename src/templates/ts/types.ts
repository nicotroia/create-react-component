import { IntlShape } from 'react-intl';

import { RootState } from '@/rootReducer';

export interface {{name}} {}
export type {{name}}Key = keyof {{name}}

export interface {{name}}Selector<
  T extends keyof {{name}}
  > {
  (state: RootState): {{name}}[T];
}

export interface State {}

export interface ConnectedProps {}

export interface DispatchProps {}

export interface OwnProps {}

export interface InjectedProps {
  intl: IntlShape;
}

export type Props = ConnectedProps & DispatchProps & OwnProps;
