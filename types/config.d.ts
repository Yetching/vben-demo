export type LocaleType = 'zh_cn' | 'en';

export interface GlobEnvConfig {
  //网站标题
  VITE_GLOB_APP_TITLE: string;
  //后台接口前缀
  VITE_GLOB_API_URL_PREFIX?: string;
  //上传接口
  VITE_GLOB_UPLOAD_URL?: string;
}

export interface GlobConfig {
  //网站标题
  title: string;
  //接口前缀
  urlPrefix: string;
  //上传地址
  uploadUrl: string;
}
