export const pageEditTemplate = `
<card-tools-component></card-tools-component>
<div layout="row" data-ng-if="vm.nothingFound" layout-padding layout-align="center">
    <div class="md-display-2">Книга не найдена</div>
</div>
<div data-ng-if="!vm.nothingFound" layout="row" layout-wrap layout-align="center">
    <card-form-component
        data-card="vm.card"
        data-on-add-author="vm.onAddAuthor()"
        data-on-delete-author="vm.onDeleteAuthor(author)"
        data-on-save-card="vm.onSaveCard()"
        data-on-image-loaded="vm.onImageLoaded(imageId)"
        data-on-image-delete="vm.onImageDelete()"
    ></card-form-component>
</div>
`;