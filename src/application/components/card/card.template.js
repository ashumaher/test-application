export const cardTemplate = `
<div class="card-image-wrapper" data-ng-if="vm.item.data.imageId">
    <img data-ng-src="{{::(vm.item.data.imageId | imageDataFilter : vm.$rootScope)}}" class="md-card-image" alt="" />
</div>
<md-card-title>
    <md-card-title-text>
        <span class="md-headline" data-ng-bind-html="::vm.item.data.title"></span>
        <div layout="row" layout-wrap layout-align="start">
            <div data-ng-repeat="author in vm.item.data.authors" style="font-size: 0;">
                <span class="md-body-1" data-ng-bind-html="::author.name"></span>
                <span class="md-body-1">&nbsp;</span>
                <span class="md-body-1" data-ng-bind-html="::author.surname"></span>
                <span class="md-body-1" data-ng-if="!$last && $index == vm.item.data.authors.length - 2">&nbsp;и&nbsp;</span>
                <span class="md-body-1" data-ng-if="!$last && $index != vm.item.data.authors.length - 2">,&nbsp;</span>
            </div>
        </div>
        <div class="md-subhead">
            <span class="md-body-2">Количество страниц:&nbsp;</span>
            <span class="md-body-1" data-ng-bind-html="::vm.item.data.pagesCount"></span>
        </div>
        <div class="md-subhead" data-ng-if="vm.item.data.publisher">
            <span class="md-body-2">Издательство:&nbsp;</span>
            <span class="md-body-1" data-ng-bind-html="::vm.item.data.publisher"></span>
        </div>
        <div class="md-subhead" data-ng-if="vm.item.data.publicationYear">
            <span class="md-body-2">Год публикации:&nbsp;</span>
            <span class="md-body-1" data-ng-bind-html="::vm.item.data.publicationYear"></span>
        </div>
        <div class="md-subhead" data-ng-if="vm.item.data.releaseDate">
            <span class="md-body-2">Дата выходы в тираж:&nbsp;</span>
            <span class="md-body-1" data-ng-bind-html="::vm.item.data.releaseDate | date : 'dd.MM.yyyy'"></span>
        </div>
        <div class="md-subhead" data-ng-if="vm.item.data.ISBN">
            <span class="md-body-2">ISBN:&nbsp;</span>
            <span class="md-body-1" data-ng-bind-html="::vm.item.data.ISBN | isbnHyphenFilter"></span>
        </div>
    </md-card-title-text>
</md-card-title>
<md-card-actions layout="row" layout-wrap layout-align="end">
    <md-button data-ng-click="vm.onDeleteClick(vm.item.id)">Удалить</md-button>
    <md-button data-ng-href="/edit/{{vm.item.id}}">Редактировать</md-button>
</md-card-actions>
`;