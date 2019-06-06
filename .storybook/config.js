import { configure, addParameters } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs/blocks';

addParameters({
  docs: DocsPage,
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
