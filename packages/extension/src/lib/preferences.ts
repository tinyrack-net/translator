import { defineProxyService, flattenPromise } from '@webext-core/proxy-service';

const STORAGE_KEY = 'local:preferences';

export type Preferences = {
  language: string;
};

export const [registerPreferencesService, getPreferencesService] =
  defineProxyService('PrefercencesService', () => {
    const item = flattenPromise(storage.getItem<Preferences>(STORAGE_KEY));
    return {
      getPreference(key: string) {
        return storage.getItem<Preferences>(STORAGE_KEY);
      },
    };
  });
