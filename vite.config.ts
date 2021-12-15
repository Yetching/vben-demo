import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    fs: {
      strict: false,
    },
  },
  //环境变量前缀  vite只会读取以前缀开头的变量
  envPrefix: 'VITE_',

  //清屏设置
  clearScreen: false,

  //别名
  resolve: {
    alias: [
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
      },
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },
});
