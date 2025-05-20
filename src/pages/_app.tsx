import React from 'react';
import '@src/Styles/GlobalStyles.css';

const App = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default App;
