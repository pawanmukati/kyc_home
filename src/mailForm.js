import React, { Component } from 'react';
import { I18nextProvider, withTranslation } from 'react-i18next';
import i18n from './i18n';

class Page extends Component {
  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  render() {
    const { t } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <input onClick={() => this.changeLanguage('es')} type="radio" value={"es"} />
          <input onClick={() => this.changeLanguage('en')} type="radio" value={"en"} />
        </div>
        <div>{t('welcome')}</div>
      </div>
    );
  }
}

const TranslatedPage = withTranslation()(Page);

export default class MailForm extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <TranslatedPage />
      </I18nextProvider>
    );
  }
}
