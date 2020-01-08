import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { IntlProvider } from 'react-intl';

import Provider from '@/components/storybook/Provider';
import DefaultStylesDecorator from '@/components/storybook/DefaultStylesDecorator';
import { intl } from '@/misc/tests';
import {{name}} from '../{{name}}';

const mockState = new Store({});

const mockProps = {
  intl,
};

const render = (children: React.ReactElement) => {
  return (
    <IntlProvider locale="en">
      <State store={mockState}>
        {children}
      </State>
    </IntlProvider>
  )
}

storiesOf('{{noSrcDir}}{{name}}', module)
  .addDecorator(Provider)
  .addDecorator(DefaultStylesDecorator)
  .add('Render default', () => render(
    <{{name}} {...mockProps} />
  ));
