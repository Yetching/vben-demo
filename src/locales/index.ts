import { App } from 'vue-demi';
import { createI18n, I18n, I18nOptions } from 'vue-i18n';

async function createI18nOptions(prefix): Promise<I18nOptions> {
  const defaultLocale = await import(`./lang/${prefix}.ts`);
  const message = defaultLocale.default?.message ?? {};
  console.log(message);
  return {
    legacy: false,
    locale: prefix,
    messages: {
      [prefix]: message,
    },
    sync: true,
    missingWarn: false,
  };
}

export async function setupI18n(app: App) {
  const options = await createI18nOptions('zh_cn');
  const i18n = createI18n(options) as I18n;
  app.use(i18n);
}
