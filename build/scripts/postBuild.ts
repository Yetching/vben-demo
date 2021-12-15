import { runBuildConfig } from './buildConf';
import chalk from 'chalk';

import pkg from '../../package.json';

/**
 * 运行app.config.js生成脚本
 */
export async function postBuild() {
  try {
    const argvs = process.argv.splice(2);

    if (!argvs.includes('no-config')) {
      runBuildConfig();
    }

    console.log(`✨ ${chalk.cyan(`[${pkg.name}]`)}` + ' - build successfully!');
  } catch (error) {
    console.log(chalk.red('vite build error:\n' + error));
    process.exit(1);
  }
}

postBuild();
