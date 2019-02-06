import {routes} from './routes.js';

import {IMAGE_DATA_FILTER_NAME, ImageDataFilter} from './filters/image-data.filter.js';
import {CATALOG_ORDER_FILTER_NAME, CatalogOrderFilter} from './filters/catalog-order.filter.js';
import {ISBN_HYPHEN_FILTER_NAME, IsbnHyphenFilter} from './filters/isbn-hyphen.filter.js';

import {CATALOG_SERVICE_NAME, CatalogService} from './services/catalog.service.js';
import {STORAGE_SERVICE_NAME, StorageService} from './services/storage.service.js';
import {SPLASH_SERVICE_NAME, SplashService} from './services/splash.service.js';
import {IMAGE_SERVICE_NAME, ImageService} from './services/image.service.js';

import {ON_FILE_CHANGE_DIRECTIVE_NAME, OnFileChangeDirective} from './directives/on-file-change.directive.js';
import {ISBN_VALIDATE_DIRECTIVE_NAME, ISBNValidateDirective} from './directives/isbn-validate.js';

import {PAGE_MAIN_COMPONENT_NAME, pageMainComponent} from './components/pages/main/page-main.component.js';
import {PAGE_EDIT_COMPONENT_NAME, pageEditComponent} from './components/pages/edit/page-edit.component.js';

import {APPLICATION_COMPONENT_NAME, applicationComponent} from './components/application/application.component.js';
import {CATALOG_COMPONENT_NAME, catalogComponent} from './components/catalog/catalog.component.js';
import {CARD_COMPONENT_NAME, cardComponent} from './components/card/card.component.js';
import {CARD_FORM_COMPONENT_NAME, cardFormComponent} from './components/card-form/card-form.component.js';
import {MAIN_TOOLS_COMPONENT_NAME, mainToolsComponent} from './components/main-tools/main-tools.component.js';
import {CARD_TOOLS_COMPONENT_NAME, cardToolsComponent} from './components/card-tools/card-tools.component.js';

angular
    .module(
        'KT-APP',
        [
            'ngSanitize',
            'ngRoute',
            'ngAnimate',
            'ngMessages',
            'ngAria',
            'ngMaterial'
        ]
    )
    .config(routes)

    .filter(IMAGE_DATA_FILTER_NAME, ImageDataFilter)
    .filter(CATALOG_ORDER_FILTER_NAME, CatalogOrderFilter)
    .filter(ISBN_HYPHEN_FILTER_NAME, IsbnHyphenFilter)

    .service(CATALOG_SERVICE_NAME, CatalogService)
    .service(STORAGE_SERVICE_NAME, StorageService)
    .service(SPLASH_SERVICE_NAME, SplashService)
    .service(IMAGE_SERVICE_NAME, ImageService)

    .directive(ON_FILE_CHANGE_DIRECTIVE_NAME, () => new OnFileChangeDirective)
    .directive(ISBN_VALIDATE_DIRECTIVE_NAME, () => new ISBNValidateDirective)

    .component(PAGE_MAIN_COMPONENT_NAME, pageMainComponent)
    .component(PAGE_EDIT_COMPONENT_NAME, pageEditComponent)

    .component(APPLICATION_COMPONENT_NAME, applicationComponent)
    .component(CATALOG_COMPONENT_NAME, catalogComponent)
    .component(CARD_COMPONENT_NAME, cardComponent)
    .component(CARD_FORM_COMPONENT_NAME, cardFormComponent)
    .component(MAIN_TOOLS_COMPONENT_NAME, mainToolsComponent)
    .component(CARD_TOOLS_COMPONENT_NAME, cardToolsComponent);

