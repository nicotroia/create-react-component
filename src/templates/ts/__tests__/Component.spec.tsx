import React from 'react';
import { createWithIntl, intl } from '@/misc/tests';

import {{name}} from '../{{name}}';

const mockProps = {
  intl,
};

describe('{{name}} Tests', () => {
  it('should render without optional props', () => {
    const component = createWithIntl(<{{name}} {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
});
