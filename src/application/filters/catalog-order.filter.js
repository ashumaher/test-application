import {
    ORDER_KEYS_MODEL_PATH,
    VALID_CATALOG_ORDER_KEYS,
    VALID_CATALOG_DIRECTIONS_KEYS,
    DIRECTIONS_KEYS_TO_DIRECTIVE,
    ORDER_FILTER_LOCATION_MODE_SEPARATOR
} from '../config.js';

export function CatalogOrderFilter() {
    function transform(order, direction, forLocation) {
        let result = [];

        if (VALID_CATALOG_DIRECTIONS_KEYS.indexOf(direction) !== -1) {
            result.push(forLocation ? direction : DIRECTIONS_KEYS_TO_DIRECTIVE[direction]);
        } else {
            result.push(forLocation ? VALID_CATALOG_DIRECTIONS_KEYS[0] : DIRECTIONS_KEYS_TO_DIRECTIVE[VALID_CATALOG_DIRECTIONS_KEYS[0]]);
        }

        if (VALID_CATALOG_ORDER_KEYS.indexOf(order) !== -1) {
            if (!forLocation) {
                result.push(ORDER_KEYS_MODEL_PATH[order]);
            }

            result.push(order);
        } else {
            if (!forLocation) {
                result.push(ORDER_KEYS_MODEL_PATH[VALID_CATALOG_ORDER_KEYS[0]]);
            }

            result.push(VALID_CATALOG_ORDER_KEYS[0]);
        }

        return result.join(forLocation ? ORDER_FILTER_LOCATION_MODE_SEPARATOR : '');
    }

    return transform;
}

export const CATALOG_ORDER_FILTER_NAME = 'catalogOrderFilter';