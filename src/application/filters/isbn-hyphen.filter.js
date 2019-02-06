import {hyphenateIsbn} from '../util/isbn.js'

export function IsbnHyphenFilter() {
    function transform(isbn) {
        return hyphenateIsbn(isbn);
    }

    return transform;
}

export const ISBN_HYPHEN_FILTER_NAME = 'isbnHyphenFilter';