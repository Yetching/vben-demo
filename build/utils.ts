import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

/**
 * 获取app.config.js存储目录 并转化为绝对路径
 * @param dir 文件夹
 * @returns
 */
export function getRootPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir);
}

/**
 * 获取当前环境下生效的配置文件名
 * @returns
 */
export function getConfigFiles() {
  const script = process.env.npm_lifecycle_script;
  const reg = new RegExp('--mode ([a-z_\\d]+)');
  const result = reg.exec(script as string) as any;
  if (result) {
    const mode = result[1] as string;
    return ['.env', `.env.${mode}`];
  }
  return ['.env', '.env.production'];
}

/**
 * 获取当前glob前缀的环境变量 需要打包至app.config.js的内容
 * 这么做的原因在于打包不依赖vite，无法使用import.meta.env
 * @param match 前缀 glob 可自己设置
 * @param confFiles 配置文件名
 */
export function getEnvConfig(
  match = 'VITE_GLOB',
  confFiles = getConfigFiles()
) {
  let envConfig = {};
  confFiles.forEach((item) => {
    try {
      const env = dotenv.parse(
        fs.readFileSync(path.resolve(process.cwd(), item))
      );
      envConfig = { ...envConfig, ...env };
    } catch (error) {
      console.error(`Error in parsing ${item}`, error);
    }
  });
  const reg = new RegExp(`^(${match})`);
  Object.keys(envConfig).forEach((key) => {
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key);
    }
  });
  return envConfig;
}

/**
 * 获取配置名称
 * @param env 环境变量
 * @returns
 */
export function getConfigFileName(env: Record<string, any>) {
  return `__PRODUCTION__${env.VITE_GLOB_APP_SHORT_NAME || 'APP'}__CONF__`
    .toUpperCase()
    .replace(/\s/g, '');
}
