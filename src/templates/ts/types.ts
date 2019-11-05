import { IntlShape } from 'react-intl';

export interface State {}

export interface InjectedProps {
  intl: IntlShape;
}

export interface ConnectedProps {}

export interface DispatchProps {}

export interface OwnProps {}

export type Props = InjectedProps & ConnectedProps & DispatchProps & OwnProps;
