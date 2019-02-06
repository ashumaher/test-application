import {catalogTemplate} from './catalog.template.js';

class CatalogController {
    onDelete(id) {
        this.onDeleteItemFromCatalog({
            id: id
        });
    }
}

CatalogController.$inject = [];

export const catalogComponent = {
    bindings: {
        list: '<',
        limit: '<',
        order: '<',
        direction: '<',
        onDeleteItemFromCatalog: '&'
    },
    template: catalogTemplate,
    controller: CatalogController,
    controllerAs: 'vm'
};

export const CATALOG_COMPONENT_NAME = 'catalogComponent';