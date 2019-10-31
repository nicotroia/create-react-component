import React from 'react';
import PropTypes from 'prop-types';

{{imports.styles}}

class {{name}} extends React.PureComponent {
  constructor(props) {
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

{{name}}.propTypes = {
};

{{name}}.defaultProps = {
};

export default {{name}};
