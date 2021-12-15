import type { GlobConfig } from '/#/config';
import { getEnvConfig } from '/@/utils/env';

export function useGlobSetting(): Readonly<GlobConfig> {
  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
  } = getEnvConfig();

  const glob = {
    title: VITE_GLOB_APP_TITLE,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_UPLOAD_URL,
  };

  return glob;
}
