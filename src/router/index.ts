import { App } from 'vue-demi';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { basicRoutes } from './routes';

const WHITE_NAME_LIST: string[] = [];

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * 重置路由
 */
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

/**
 * 挂载路由
 * @param app vue实例
 */
export function setupRouter(app: App) {
  app.use(router);
}
