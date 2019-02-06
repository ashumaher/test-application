import {
    MAX_CARD_TITLE_LENGTH,
    MIN_CARD_AUTHORS_COUNT,
    MAX_CARD_PUBLISHER_LENGTH,
    MIN_CARD_PAGES_COUNT,
    MAX_CARD_PAGES_COUNT,
    MIN_CARD_PUBLICATION_YEAR,
    MAX_CARD_AUTHOR_NAME_LENGTH,
    MAX_CARD_AUTHOR_SURNAME_LENGTH
} from '../../config.js'

export const cardFormTemplate = `
<md-card>
    <div class="card-image-wrapper" data-ng-if="vm.card.data.imageId">
        <img data-ng-src="{{(vm.card.data.imageId | imageDataFilter : vm.$rootScope)}}" class="md-card-image" alt="" />
    </div>
    <div layout-padding>
        <div layout="row" layout-align="center">
            <input accept="image/jpeg,image/png,image/gif" class="ng-hide" id="input-image" type="file" data-on-file-change="vm.onImageSelected" />
            <label for="input-image" class="md-button">Выбрать картинку</label>
            <md-button data-ng-if="vm.card.data.imageId" data-ng-click="vm.omImageDelete()">Удалить картинку</md-button>
        </div>
        <form name="cardForm" autocomplete="off" novalidate>
            <div>
                <div layout="row">
                    <md-input-container flex="50">
                        <label>Заголовок</label>
                        <input md-maxlength="${MAX_CARD_TITLE_LENGTH}" required name="title" ng-model="vm.card.data.title" />
                        <div ng-messages="cardForm.title.$error">
                            <div ng-message="required">Это обязательное поле</div>
                            <div ng-message="md-maxlength">Длина должна быть не более ${MAX_CARD_TITLE_LENGTH} символов</div>
                        </div>
                    </md-input-container>
                    <md-input-container flex="50">
                        <label>Количество страниц</label>
                        <input type="number" step="1" min="${MIN_CARD_PAGES_COUNT}"  max="${MAX_CARD_PAGES_COUNT}" required name="pagesCount" ng-model="vm.card.data.pagesCount" />
                        <div ng-messages="cardForm.pagesCount.$error">
                            <div ng-message="required">Это обязательное поле</div>
                            <div ng-message="min">Число должно быть не меньше ${MIN_CARD_PAGES_COUNT}</div>
                            <div ng-message="max">Число должно быть не больше ${MAX_CARD_PAGES_COUNT}</div>
                            <div ng-message="step">Число должно быть целым</div>
                        </div>
                    </md-input-container>
                </div>
                <div layout="row">
                    <md-input-container flex="50">
                        <label>Издательство</label>
                        <input md-maxlength="${MAX_CARD_PUBLISHER_LENGTH}" name="publisher" ng-model="vm.card.data.publisher" />
                        <div ng-messages="cardForm.publisher.$error">
                            <div ng-message="md-maxlength">Длина должна быть не более ${MAX_CARD_PUBLISHER_LENGTH} символов</div>
                        </div>
                    </md-input-container>
                    <md-input-container flex="50">
                        <label>Год публикации</label>
                        <input type="number" step="1" min="${MIN_CARD_PUBLICATION_YEAR}" name="publicationYear" ng-model="vm.card.data.publicationYear" />
                        <div ng-messages="cardForm.publicationYear.$error">
                            <div ng-message="min">Число должно быть не менее ${MIN_CARD_PUBLICATION_YEAR}</div>
                            <div ng-message="step">Число должно быть целым</div>
                        </div>
                    </md-input-container>
                </div>
                <div class="md-body-2">Дата выхода в тираж</div>
                <md-input-container class="md-block">
                    <md-datepicker md-placeholder="Введите дату" md-min-date="vm.MIN_CARD_RELEASE_DATE" name="releaseDate" ng-model="vm.card.data.releaseDate"></md-datepicker>
                    <div ng-messages="cardForm.releaseDate.$error">
                        <div ng-message="valid">Введите корректную дату</div>
                        <div ng-message="mindate">Дата должна быть не ранее {{vm.MIN_CARD_RELEASE_DATE | date : 'dd.MM.yyyy'}}</div>
                    </div>
                </md-input-container>
                <md-input-container class="md-block">
                    <label>ISBN (только цифры)</label>
                    <input name="isbn" ng-model="vm.card.data.ISBN" data-isbn-validate />
                    <div ng-messages="cardForm.isbn.$error">
                        <div ng-message="isbn">ISBN должен быть корректным</div>
                    </div>
                </md-input-container>
                <md-container>
                    <div class="md-body-2">Авторы</div>
                    <div layout-padding>&nbsp;</div>
                    <div data-ng-repeat="author in vm.card.data.authors" layout="row">
                        <md-input-container flex="100">
                            <label>Имя</label>
                            <input name="authorName_{{$index}}" md-maxlength="${MAX_CARD_AUTHOR_NAME_LENGTH}" ng-model="author.name" required />
                            <div ng-messages="cardForm['authorName_' + $index].$error">
                                <div ng-message="required">Это обязательное поле</div>
                                <div ng-message="md-maxlength">Длина должна быть не более ${MAX_CARD_AUTHOR_NAME_LENGTH} символов</div>
                            </div>
                        </md-input-container>
                        <md-input-container flex="100">
                            <label>Фамилия</label>
                            <input name="authorSurname_{{$index}}" md-maxlength="${MAX_CARD_AUTHOR_SURNAME_LENGTH}" ng-model="author.surname" required />
                            <div ng-messages="cardForm['authorSurname_' + $index].$error">
                                <div ng-message="required">Это обязательное поле</div>
                                <div ng-message="md-maxlength">Длина должна быть не более ${MAX_CARD_AUTHOR_NAME_LENGTH} символов</div>
                            </div>
                        </md-input-container>
                        <div data-ng-if="vm.card.data.authors.length > ${MIN_CARD_AUTHORS_COUNT}" layout="row">
                            <md-button data-ng-click="vm.onDeleteAuthorClick(author)">Удалить</md-button>
                        </div>
                    </div>
                    <div layout="row" layout-align="end">
                        <md-button data-ng-click="vm.onAddAuthorClick()">Добавить автора</md-button>
                    </div>
                </md-container>
            </div>
            <div layout="row" layout-align="center">
                <md-button data-type="submit" data-ng-click="cardForm.$valid && vm.onSaveCardClick()">Сохранить</md-button>
            </div>
        </form>
    </div>
</md-card>
`;