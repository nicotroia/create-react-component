import { connect } from 'react-redux';

{{imports.actions}}
{{imports.selectors}}

import {{name}} from './{{name}}';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)({{name}});
