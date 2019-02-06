import {LOCAL_STORAGE_PREFIX} from '../config.js';

const getStorageKey = key => `${LOCAL_STORAGE_PREFIX}.${key}`;

/* @ngInject */
export class StorageService {
    getItem(key) {
        let result = null;

        try {
            result = JSON.parse(localStorage.getItem(
                getStorageKey(key)
            )).value;
        } catch(exception) {
        }

        return result;
    }

    setItem(key, value) {
        localStorage.setItem(
            getStorageKey(key),
            angular.toJson({
                value: value
            })
        );
    }
}

export const STORAGE_SERVICE_NAME = 'storageService';