import { getConfigFileName } from 'build/utils';
import { GlobEnvConfig } from '/#/config';

export function getStoragePrefix() {}

/**
 * 获取全局配置
 * dev下直接import.meta.env
 * prod下直接获取app.config.js里挂载window上的变量
 * @returns
 */
export function getEnvConfig() {
  const ENV_NAME = getConfigFileName(import.meta.env);

  const ENV = import.meta.env.DEV
    ? (import.meta.env as unknown as GlobEnvConfig)
    : window[ENV_NAME];

  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_UPLOAD_URL,
    VITE_GLOB_API_URL_PREFIX,
  } = ENV;

  return {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
  };
}
