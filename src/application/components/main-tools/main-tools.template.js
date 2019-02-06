import {
    CATALOG_ORDER_KEY_PUBLICATION_YEAR,
    CATALOG_ORDER_KEY_TITLE,
    CATALOG_DIRECTIONS_KEY_DESC,
    CATALOG_DIRECTIONS_KEY_ASC
} from '../../config.js';

export const mainToolsTemplate = `
<md-toolbar>
    <div class="md-toolbar-tools">
        <md-button data-ng-href="/add">Добавить книгу</md-button>
        <md-select ng-model="vm.sorting" data-ng-change="vm.onSortingChange()" placeholder="Сортировка" class="md-body-1">
            <md-option data-ng-if="vm.showResetSort()" value="{{::vm.getSortingValue('', '')}}">Сбросить</md-option>
            <md-option value="{{::vm.getSortingValue('${CATALOG_ORDER_KEY_TITLE}', '${CATALOG_DIRECTIONS_KEY_DESC}')}}">Заголовок по убыванию</md-option>
            <md-option value="{{::vm.getSortingValue('${CATALOG_ORDER_KEY_TITLE}', '${CATALOG_DIRECTIONS_KEY_ASC}')}}">Заголовок по возрастанию</md-option>
            <md-option value="{{::vm.getSortingValue('${CATALOG_ORDER_KEY_PUBLICATION_YEAR}', '${CATALOG_DIRECTIONS_KEY_DESC}')}}">Год публикации по убыванию</md-option>
            <md-option value="{{::vm.getSortingValue('${CATALOG_ORDER_KEY_PUBLICATION_YEAR}', '${CATALOG_DIRECTIONS_KEY_ASC}')}}">Год публикации по возрастанию</md-option>
        </md-select>
    </div>
</md-toolbar>
`;