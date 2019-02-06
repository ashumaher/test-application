import {cardFormTemplate} from './card-form.template.js';

import {IMAGE_SERVICE_NAME} from '../../services/image.service.js';

import {MIN_CARD_RELEASE_DATE} from '../../config.js'

class CardFormController {
    constructor(
        $rootScope,
        imageService
    ) {
        'ngInject';

        this.$rootScope = $rootScope;
        this.imageService = imageService;
        this.MIN_CARD_RELEASE_DATE = MIN_CARD_RELEASE_DATE;
        this.onImageSelected = onImageSelected.bind(this);
    }

    omImageDelete() {
        this.onImageDelete();
    }

    onSaveCardClick() {
        this.onSaveCard();
    }

    onAddAuthorClick() {
        this.onAddAuthor();
    }

    onDeleteAuthorClick(author) {
        this.onDeleteAuthor({
            author: author
        });
    }
}

CardFormController.$inject = [
    '$rootScope',
    IMAGE_SERVICE_NAME
];

function onImageSelected(file) {
    this.imageService.saveToCache(file).then((imageId) => {
        this.onImageLoaded({
            imageId: imageId
        });
    });
}

export const cardFormComponent = {
    bindings: {
        card: '<',
        onAddAuthor: '&',
        onDeleteAuthor: '&',
        onSaveCard: '&',
        onImageLoaded: '&',
        onImageDelete: '&'
    },
    template: cardFormTemplate,
    controller: CardFormController,
    controllerAs: 'vm'
};

export const CARD_FORM_COMPONENT_NAME = 'cardFormComponent';