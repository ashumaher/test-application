import {isValidIsbn} from '../util/isbn.js';

export class ISBNValidateDirective {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link(scope, element, attrs, ngModel) {
        ngModel.$validators.isbn = (value) => {
            return !value ? true : isValidIsbn(value);
        };
    }
}

export const ISBN_VALIDATE_DIRECTIVE_NAME = 'isbnValidate';