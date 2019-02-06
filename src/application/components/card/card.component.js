import {cardTemplate} from './card.template.js';

class CardController {
    constructor(
        $rootScope
    ) {
        'ngInject';

        this.$rootScope = $rootScope;
    }

    onDeleteClick(id) {
        this.onDelete({
            id: id
        });
    }
}

CardController.$inject = [
    '$rootScope'
];

export const cardComponent = {
    bindings: {
        item: '<',
        onDelete: '&'
    },
    template: cardTemplate,
    controller: CardController,
    controllerAs: 'vm'
};

export const CARD_COMPONENT_NAME = 'cardComponent';