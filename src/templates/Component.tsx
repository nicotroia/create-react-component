import React from 'react';

import { Props } from './types';

{{imports.styles}}

class {{name}} extends React.PureComponent<Required<Props>> {
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
