import React from 'react';
import { storiesOf } from '@storybook/react';
import { IntlProvider } from 'react-intl';

import Provider from '@/components/storybook/Provider';
import DefaultStylesDecorator from '@/components/storybook/DefaultStylesDecorator';
import { intl } from '@/misc/tests';
import {{name}} from '../{{name}}';

const mockProps = {
  intl,
};

storiesOf('{{noSrcDir}}{{name}}', module)
  .addDecorator(Provider)
  .addDecorator(DefaultStylesDecorator)
  .add('Render default', () => (
    <IntlProvider locale="en">
      <{{name}} {...mockProps} />
    </IntlProvider>
  ));
