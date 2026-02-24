import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { LandingPageUA } from './pages/LandingPageUA';
export function App() {
  const [lang, setLang] = useState<'en' | 'ua'>('en');
  return (
    <>
      {lang === 'en' ?
      <LandingPage onLanguageChange={setLang} /> :

      <LandingPageUA onLanguageChange={setLang} />
      }
    </>);

}