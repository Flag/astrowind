import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'xu9gaiaz',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});