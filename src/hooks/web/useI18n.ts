import { useI18n } from 'vue-i18n';

//防止不规范数据造成异常

export function useI18nFn() {
  const { t, ...methods } = useI18n();

  const tFn = (key) => {
    if (!key) return '';
    return t(key);
  };

  return {
    t: tFn,
    ...methods,
  };
}
