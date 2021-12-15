import { createApp } from 'vue';
import App from './App.vue';
import { logEnvConfig } from './playground/env';
import { test } from './locales/lang/zh_cn';
import { setupI18n } from './locales';
import { setupRouter } from './router';

async function bootstrap() {
  const app = createApp(App);

  //测试
  test();
  logEnvConfig();
  //...

  await setupI18n(app);

  setupRouter(app);

  app.mount('#app');
}

bootstrap();
