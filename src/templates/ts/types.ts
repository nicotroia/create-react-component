import { IntlShape } from 'react-intl';
import { Action } from 'vidy-redux';

import { RootState } from '@/rootReducer';

export interface {{name}} {}
export type {{name}}Key = keyof {{name}}

export interface {{name}}Selector<
  T extends keyof {{name}}
  > {
  (state: RootState): {{name}}[T];
}

export interface ActionType {};

export type Actions =
  | Action<'LOG_OUT'>;

export interface State {}

export interface ConnectedProps {}

export interface DispatchProps {}

export interface OwnProps {}

export interface InjectedProps {
  intl: IntlShape;
}

export type Props = ConnectedProps & DispatchProps & OwnProps;
