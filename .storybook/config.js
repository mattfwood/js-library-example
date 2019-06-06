import { configure, addParameters, addDecorator } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';

addParameters({
  docs: DocsPage,
});

addDecorator(withA11y)

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
