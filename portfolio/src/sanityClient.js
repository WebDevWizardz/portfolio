import { createClient } from '@sanity/client';

export default createClient({
      projectId: 'lezkfw80', // replace with your actual project ID
      dataset: 'production',          // replace with your dataset name if different
      useCdn: true,                   // `false` if you want to ensure fresh data
});