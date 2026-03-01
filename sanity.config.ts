import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas/index';

export default defineConfig({
  name: 'producentric',
  title: 'Producentric',
  projectId: 'xu9gaiaz',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});