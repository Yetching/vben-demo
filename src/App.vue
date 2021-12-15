<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import { useI18n } from 'vue-i18n';
import { useI18nFn } from './hooks/web/useI18n';
import { useLocale } from './locales/useLocale';
import { reactive } from 'vue-demi';

console.log(useI18n());

// const { getLocaleMessage, t: rawT } = useI18n();

const { t } = useI18nFn();

const { changeLocale } = useLocale();

console.log(t('sys.login.loginBtn'));

const localeConfig = reactive({
  currentLocale: 'zh_cn',
  changeLocale: async () => {
    if (localeConfig.currentLocale === 'zh_cn') {
      await changeLocale('en');
      localeConfig.currentLocale = 'en';
    } else {
      await changeLocale('zh_cn');
      localeConfig.currentLocale = 'zh_cn';
    }
  },
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="locale-wrapper">
    <button @click="localeConfig.changeLocale">
      {{ t('sys.menu.localeBtn') }}
    </button>
    <p>当前语言: {{ localeConfig.currentLocale }}</p>
  </div>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
