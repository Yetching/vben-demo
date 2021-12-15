export const LAYOUT = () => import('/@/layouts/index.vue');

/**
 * TODO 没看懂啥意思
 * @param _name
 * @returns
 */
export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: 'ParentLayout',
      });
    });
};
