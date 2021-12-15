//没有export的时候，toString会与全局的冲突
//使用export即ESModule能形成闭包概念的模块
const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isDef(val?) {
  return typeof val !== "undefined";
}

isDef();
