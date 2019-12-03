import React from 'react';
import { storiesOf } from '@storybook/react';

import Provider from '@/components/storybook/Provider';
import DefaultStylesDecorator from '@/components/storybook/DefaultStylesDecorator';
import {{name}} from '../{{name}}';

const mockProps = {};

storiesOf('{{noSrcDir}}{{name}}', module)
  .addDecorator(Provider)
  .addDecorator(DefaultStylesDecorator)
  .add('Render default', () => <{{name}} {...mockProps} />);
