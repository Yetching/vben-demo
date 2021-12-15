import { unref } from 'vue-demi';
import { useI18n } from 'vue-i18n';
import { LocaleType } from '/#/config';

export function useLocale() {
  const { locale, setLocaleMessage } = useI18n();

  async function changeLocale(newLocale: LocaleType) {
    const currentLocale = unref(locale);

    console.log(currentLocale);

    if (currentLocale === newLocale) {
      return locale;
    }

    const langModule = (await import(`./lang/${newLocale}.ts`)).default;
    if (!langModule) return;

    const { message } = langModule;

    console.log(message);

    setLocaleMessage(newLocale, message);

    locale.value = newLocale;
    return locale;
  }

  return {
    changeLocale,
  };
}
