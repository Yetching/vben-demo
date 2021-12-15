import { set } from 'lodash';
/**
 * 用于生成i18n所需的messages结构，详情可查阅vue-i18n文档
 * @param langs 语言包文件模块形式
 * @param prefix 前缀，即不同语言缩写
 */
export function genMessage(langs, prefix = 'lang') {
  const obj = {};

  Object.keys(langs).forEach((key) => {
    const langModule = langs[key].default;
    let fileName = key.replace(`./${prefix}/`, '').replace(/^\.\//, '');
    const lastIndex = fileName.lastIndexOf('.');
    fileName = fileName.substring(0, lastIndex);
    const keyList = fileName.split('/');
    const moduleName = keyList.shift();
    const objKey = keyList.join('.');

    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {});
        set(obj[moduleName], objKey, langModule);
      } else {
        set(obj, moduleName, langModule || {});
      }
    }
  });

  return obj;
}
