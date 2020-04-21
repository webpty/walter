import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
// import {addLocaleData, IntlProvider} from 'react-intl'
import App from './App';
import * as serviceWorker from './serviceWorker';
// import en from 'react-intl/locale-data/en'
// import es from 'react-intl/locale-data/es'
// import pt from 'react-intl/locale-data/pt'
// import vi from 'react-intl/locale-data/vi'

// addLocaleData([...en, ...es, ...pt, ...vi])
ReactDOM.render(
  <React.StrictMode>
    {/* <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}> */}
      <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </IntlProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
