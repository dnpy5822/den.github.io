import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import dotenvPlugin from 'rollup-plugin-dotenv';

export const config: Config = {
  namespace: 'icon-widgets',
  buildEs5: true,
  globalStyle: 'src/global/global.css',
  outputTargets: [
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },
    // {
    //   type: 'dist-custom-elements',
    // },
    // {
    //   type: 'docs-readme',
    // },
    {
      type: 'www',
      serviceWorker: null, // disable service workers,
      baseUrl: '/',
      buildDir: 'build',
      dir: 'www',
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [sass(), dotenvPlugin()],
  devServer: {
    basePath: '/',
  },
};
