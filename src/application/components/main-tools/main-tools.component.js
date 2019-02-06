import {mainToolsTemplate} from './main-tools.template.js';

import {CATALOG_ORDER_FILTER_NAME} from '../../filters/catalog-order.filter.js';

import {
    LOCATION_PARAM_ORDER,
    LOCATION_PARAM_DIRECTION,
    ORDER_FILTER_LOCATION_MODE_SEPARATOR
} from '../../config.js';

class MainToolsController {
    constructor(
        $location,
        $routeParams,
        $filter
    ) {
        'ngInject';

        this.$location = $location;
        this.$filter = $filter;
        this.$routeParams = $routeParams;
        this.sorting = this.getSortingValue(
            $routeParams[LOCATION_PARAM_ORDER],
            $routeParams[LOCATION_PARAM_DIRECTION]
        );
    }

    showResetSort() {
        return !!(this.$routeParams[LOCATION_PARAM_ORDER] || this.$routeParams[LOCATION_PARAM_DIRECTION]);
    }

    getSortingValue(order, direction) {
        return this.$filter(CATALOG_ORDER_FILTER_NAME)(order, direction, true);
    }

    onSortingChange() {
        const values = this.sorting.split(ORDER_FILTER_LOCATION_MODE_SEPARATOR);

        if (this.sorting === this.getSortingValue()) {
            this.$location.url('/');
        } else {
            this.$location
                .search(LOCATION_PARAM_DIRECTION, values[0])
                .search(LOCATION_PARAM_ORDER, values[1]);
        }
    }
}

MainToolsController.$inject = [
    '$location',
    '$routeParams',
    '$filter'
];

export const mainToolsComponent = {
    template: mainToolsTemplate,
    controller: MainToolsController,
    controllerAs: 'vm'
};

export const MAIN_TOOLS_COMPONENT_NAME = 'mainToolsComponent';