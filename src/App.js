import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { withTranslation, Trans } from 'react-i18next';

const App = ({ t, i18n }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>{t('欢迎 to React')}</h2>
      <Trans>trans</Trans>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};

export default withTranslation()(hot(App));
