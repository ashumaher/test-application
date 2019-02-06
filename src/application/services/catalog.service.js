import {STORAGE_SERVICE_NAME} from './storage.service.js';

import {LOCAL_STORAGE_KEY_CATALOG} from '../config.js'

import {uuid} from '../util/uuid.js';

/* @ngInject */
export class CatalogService {
    constructor(
        storageService
    ) {
        'ngInject';

        this.storageService = storageService;

        this.list = storageService.getItem(LOCAL_STORAGE_KEY_CATALOG) || [];
    }

    getList() {
        return this.list;
    }

    getItem(id) {
        return this.getList().find(item => item.id === id);
    }

    addItem(data) {
        this.getList().push({
            data: data,
            id: uuid(),
            timestamp: Date.now()
        });

        this.saveList();
    }

    updateItem(update) {
        let search = this.getList().find(item => item.id === update.id);

        if (search) {
            search.data = update.data;
        }

        this.saveList();
    }

    deleteItem(id) {
        this.list = this.getList().filter(item => item.id !== id);

        this.saveList();
    }

    saveList() {
        this.storageService.setItem(
            LOCAL_STORAGE_KEY_CATALOG,
            this.list
        );
    }
}

CatalogService.$inject = [
    STORAGE_SERVICE_NAME
];

export const CATALOG_SERVICE_NAME = 'catalogService';