import React from 'react';

import { Props, State, InjectedProps } from './types';

{{imports.styles}}

class {{name}} extends React.PureComponent<Required<Props> & InjectedProps, State> {
  static defaultProps: Partial<Props> = {};

  readonly state: State = {};

  render() {
    return (
      <div{{styles.container}}>
        {{name}} goes here.
      </div>
    );
  }
}

export default {{name}};
