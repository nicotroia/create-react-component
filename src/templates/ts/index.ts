import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';

import { RootState } from '@/rootReducer';
{{imports.actions}}
{{imports.selectors}}
import { ConnectedProps, DispatchProps, OwnProps } from './types';

import {{name}} from './{{name}}';

const mapStateToProps = (state: RootState): ConnectedProps => ({
});

const mapDispatchToProps: DispatchProps = {
};

export default compose(
  connect<ConnectedProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { forwardRef: true },
  ),
  injectIntl
)({{name}});
