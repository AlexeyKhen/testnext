import type { I18n } from "@lingui/core";
import { en, ru, kk } from "make-plural/plurals";

export function initTranslation(i18n: I18n): void {
  i18n.loadLocaleData({
    en: { plurals: en },
    ru: { plurals: ru },
    kz: { plurals: kk },
  });
}

export async function loadTranslation(locale: string, isProduction = true) {
  let data;
  if (isProduction) {
    data = await import(`./translations/locales/${locale}/messages`);
  } else {
    data = await import(
        `@lingui/loader!./translations/locales/${locale}/messages.po`
        );
  }
  return data.messages;
}
