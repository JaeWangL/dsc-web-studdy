import { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, darkTheme } from '@/config/themeVariables';
import AuthWrapper from '@/layouts/auth';
import SEO from '@root/next-seo.config';
// import GlobalStyles from '@/styles/globalStyles';
import '@/styles/antd.less';

const myApp = ({ Component, pageProps, router }: AppProps): React.ReactElement => {
  const getValidComponent = (): React.ReactElement => {
    if (router.pathname.startsWith('/signin')) {
      return (
        <AuthWrapper>
          <Component {...pageProps} />
        </AuthWrapper>
      );
    }

    return <Component {...pageProps} />;
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700" rel="stylesheet" />
      </Head>
      <DefaultSeo {...SEO} />
      {/* <GlobalStyles /> */}
      <ThemeProvider theme={theme}>{getValidComponent()}</ThemeProvider>
    </>
  );
};

export default myApp;
