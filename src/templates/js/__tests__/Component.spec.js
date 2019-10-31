import React from 'react';
import render from 'react-test-renderer';

import {{name}} from '../{{name}}';

describe('{{name}} Tests', () => {
  it('should render without optional props', () => {
    const component = render.create(<{{name}} />);
    expect(component).toMatchSnapshot();
  });
});
