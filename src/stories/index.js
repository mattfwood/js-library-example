import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Dropdown from '../Dropdown';

// storiesOf('Welcome', module).add('to Storybook', () => (
//   // <Welcome showApp={linkTo('Button')} />
//   <Dropdown />
// ));

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role='img' aria-label='so cool'>
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ))

storiesOf('Dropdown', module)
  .addParameters({ component: Dropdown })
  .add('default', () => <Dropdown text="Hello" />);
