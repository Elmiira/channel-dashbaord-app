/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet';
import React from 'react';
import 'assets/style/global.scss';

import { PublicRoutes } from 'containers/Routes/index';
import config from '../../config';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle={config.projectTitle}
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <PublicRoutes />
      <GlobalStyle />
    </>
  );
}
