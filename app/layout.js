"use client";
import Header from './header';
import Footer from './footer';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Script from 'next/script';


export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <link rel="icon" href="/images/fevicon.png" type="image/gif" />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/custom.css" />
          <link rel="stylesheet" href="/css/test.css" />
          <link rel="stylesheet" href="/css/responsive.css" />
          <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css" />
          <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link rel="stylesheet" href="/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
        </head>
        <body>
          <Provider store={store}>
            <Header />
            {children}
            <Footer />
          </Provider>
          <Script src="/js/jquery.min.js" strategy="lazyOnload" />
          <Script src="/js/popper.min.js" strategy="lazyOnload" />
          <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
          <Script src="/js/jquery-3.0.0.min.js" strategy="lazyOnload" />
          <Script src="/js/plugin.js" strategy="lazyOnload" />
          <Script src="/js/jquery.mCustomScrollbar.concat.min.js" strategy="lazyOnload" />
          <Script src="/js/custom.js" strategy="lazyOnload" />
          <Script src="/js/owl.carousel.js" strategy="lazyOnload" />
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js" strategy="lazyOnload" />
        </body>
      </html>
    </>
  );
}
