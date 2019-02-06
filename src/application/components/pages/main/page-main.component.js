import {pageMainTemplate} from './page-main.template.js';

import {CATALOG_SERVICE_NAME} from '../../../services/catalog.service.js';
import {SPLASH_SERVICE_NAME} from '../../../services/splash.service.js';

import {
    CATALOG_PART_SIZE,
    LOCATION_PARAM_ORDER,
    LOCATION_PARAM_DIRECTION
} from '../../../config.js';

class PageMainController {
    constructor(
        $mdDialog,
        $routeParams,
        catalogService,
        splashService
    ) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$routeParams = $routeParams;
        this.catalogService = catalogService;
        this.order = this.$routeParams[LOCATION_PARAM_ORDER];
        this.direction = this.$routeParams[LOCATION_PARAM_DIRECTION];
        this.limit = CATALOG_PART_SIZE;

        splashService.ready();
    }

    $onDestroy() {
        this.$mdDialog.cancel();
    }

    onShowMoreClick() {
        this.limit += CATALOG_PART_SIZE;
    }

    onDeleteItemFromCatalog(id) {
        this.confirmDialog = this.$mdDialog
            .confirm()
            .title('Внимание')
            .textContent('Вы точно хотите удалить эту книгу из каталога?')
            .ok('Да')
            .cancel('Нет');

        this.$mdDialog.show(this.confirmDialog).then(() => {
            this.catalogService.deleteItem(id);
        }, () => {
        });
    }
}

PageMainController.$inject = [
    '$mdDialog',
    '$routeParams',
    CATALOG_SERVICE_NAME,
    SPLASH_SERVICE_NAME
];

export const pageMainComponent = {
    template: pageMainTemplate,
    controller: PageMainController,
    controllerAs: 'vm'
};

export const PAGE_MAIN_COMPONENT_NAME = 'pageMainComponent';