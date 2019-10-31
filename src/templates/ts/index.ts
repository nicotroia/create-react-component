import { connect } from 'react-redux';

import { RootState } from '@/rootReducer';
{{imports.actions}}
{{imports.selectors}}
import { ConnectedProps, DispatchProps, OwnProps } from './types';

import {{name}} from './{{name}}';

const mapStateToProps = (state: RootState): ConnectedProps => ({
});

const mapDispatchToProps: DispatchProps = {
};

export default connect<ConnectedProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)({{name}});
