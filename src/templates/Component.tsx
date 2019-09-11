import React from 'react';

import { Props, State } from './types';

{{imports.styles}}

class {{name}} extends React.PureComponent<Required<Props>, State> {
  static defaultProps: Partial<Props> = {};

  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div{{styles.container}}>
        {{name}} goes here.
      </div>
    );
  }
}

export default {{name}};
