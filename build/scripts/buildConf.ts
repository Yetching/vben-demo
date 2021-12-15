/**
 * 打包时候生成可线上配置的配置文件
 */

import fs, { writeFileSync } from 'fs-extra';
import chalk from 'chalk';
import pkg from '../../package.json';

import { GLOB_CONFIG_FILE_NAME, OUTPUT_DIR } from '../constant';

import { getRootPath, getConfigFileName, getEnvConfig } from '../utils';

/**
 * 生成配置文件app.config.js或其他任何自定义名字
 * @param params 配置参数
 */
function createConfig(params) {
  const { configName, config, configFileName } = params;

  try {
    const windowConf = `window.${configName}`;
    //确保变量不会被覆盖
    const configStr = `${windowConf}=${JSON.stringify(config)};
      Object.freeze(${windowConf});
      Object.defineProperty(window, "${configName}", {
        configurable: false,
        writable: false,
      });
    `.replace(/\s/g, '');

    fs.mkdirp(getRootPath(OUTPUT_DIR));

    writeFileSync(getRootPath(`${OUTPUT_DIR}/${configFileName}`), configStr);

    console.log(
      chalk.cyan(`✨ [${pkg.name}]`) +
        ` - configuration file is build successfully:`
    );
    console.log(
      chalk.gray(OUTPUT_DIR + '/' + chalk.green(configFileName)) + '\n'
    );
  } catch (error) {
    console.log(chalk.red('configuration file failed to package:\n' + error));
  }
}

/**
 * 构建配置参数
 */
export function runBuildConfig() {
  const config = getEnvConfig();
  const configFileName = getConfigFileName(config);
  createConfig({
    config,
    configName: configFileName,
    configFileName: GLOB_CONFIG_FILE_NAME,
  });
}
