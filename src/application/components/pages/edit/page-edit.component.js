import {pageEditTemplate} from './page-edit.template.js';

import {CATALOG_SERVICE_NAME} from '../../../services/catalog.service.js';
import {SPLASH_SERVICE_NAME} from '../../../services/splash.service.js';
import {MIN_CARD_AUTHORS_COUNT} from '../../../config.js';

class PageEditController {
    constructor(
        $routeParams,
        $location,
        catalogService,
        splashService
    ) {
        'ngInject';

        this.$location = $location;
        this.catalogService = catalogService;
        this.id = $routeParams.id;
        this.card = {};

        if (this.id) {
            angular.copy(
                this.catalogService.getItem(this.id),
                this.card
            );

            if (!this.card.id) {
                this.nothingFound = true;
            }
        }

        if (!this.nothingFound) {
            this.card.data = this.card.data || {};
            this.card.data.authors = this.card.data.authors || [];

            if (this.card.data.authors.length < MIN_CARD_AUTHORS_COUNT) {
                this.card.data.authors = this.card.data.authors.concat(
                    Array.from({
                        length: MIN_CARD_AUTHORS_COUNT - this.card.data.authors.length
                    }, () => ({}))
                );
            }
        }

        splashService.ready();
    }

    onAddAuthor() {
        this.card.data.authors.push({});
    }

    onDeleteAuthor(author) {
        this.card.data.authors = this.card.data.authors.filter(item => item !== author);
    }

    onSaveCard() {
        if (this.card.id) {
            this.catalogService.updateItem(this.card);
        } else {
            this.catalogService.addItem(this.card.data);
        }

        this.$location.path('/');
    }

    onImageDelete() {
        this.card.data.imageId = null;
    }

    onImageLoaded(imageId) {
        this.card.data.imageId = imageId;
    }
}

PageEditController.$inject = [
    '$routeParams',
    '$location',
    CATALOG_SERVICE_NAME,
    SPLASH_SERVICE_NAME
];

export const pageEditComponent = {
    template: pageEditTemplate,
    controller: PageEditController,
    controllerAs: 'vm'
};

export const PAGE_EDIT_COMPONENT_NAME = 'pageEditComponent';