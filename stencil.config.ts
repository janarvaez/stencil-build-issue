import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-lib',
  taskQueue: 'async',
  buildEs5: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ]
};
