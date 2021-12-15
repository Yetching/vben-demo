import { genMessage } from '../helper';

const modules = import.meta.globEager('./zh_cn/**/*.ts');

export default {
  message: {
    ...genMessage(modules, 'zh_cn'),
  },
};

export function test() {
  console.log(modules);
}
