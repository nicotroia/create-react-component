import { IntlShape } from 'react-intl';

export interface State {}

export interface ConnectedProps {}

export interface DispatchProps {}

export interface OwnProps {
  intl: IntlShape;
}

export type Props = ConnectedProps & DispatchProps & OwnProps;
