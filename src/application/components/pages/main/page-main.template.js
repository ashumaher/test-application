export const pageMainTemplate = `
<main-tools-component></main-tools-component>
<catalog-component
    data-list="vm.catalogService.getList()"
    data-on-delete-item-from-catalog="vm.onDeleteItemFromCatalog(id)"
    data-order="vm.order"
    data-limit="vm.limit"
    data-direction="vm.direction"
></catalog-component>
<div
    layout-padding
    layout="row"
    layout-align="center"
    data-ng-if="vm.limit < vm.catalogService.getList().length"
>
    <md-button data-ng-click="vm.onShowMoreClick()">Показать еще</md-button>
</div>
<div layout="row" data-ng-if="!vm.catalogService.getList().length" layout-padding layout-align="center">
    <div class="md-display-2">В каталоге пока что ничего нет</div>
</div>
`;