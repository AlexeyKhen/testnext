import type { AppProps } from 'next/app'
import { i18n } from "@lingui/core";
import { useEffect, useRef } from "react";
import { I18nProvider } from "@lingui/react";
import {useCurrentLocale} from "../useCurrentLocale";
import {initTranslation} from "../utils";

initTranslation(i18n);

function MyApp({ Component, pageProps }: AppProps) {
  const currentLocale = useCurrentLocale();

  const firstRender = useRef(true);

  if (pageProps.translation && firstRender.current) {
    i18n.load(currentLocale, pageProps.translation);
    i18n.activate(currentLocale);
    firstRender.current = false;
  }

  useEffect(() => {
    if (pageProps.translation) {
      i18n.load(currentLocale, pageProps.translation);
      i18n.activate(currentLocale);
    }
  }, [currentLocale, pageProps.translation]);

  return (
      <I18nProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nProvider>
  )
}

export default MyApp
