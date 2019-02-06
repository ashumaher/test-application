const ISBN_GROUPS_SEPARATOR = '-';

function hyphenateIsbn13(isbn = '') {
    return [
        isbn.substring(0, 3),
        isbn.substring(3, 4),
        isbn.substring(4, 7),
        isbn.substring(7, 12),
        isbn.substring(12, 13)
    ].join(ISBN_GROUPS_SEPARATOR);
}

function hyphenateIsbn10(isbn = '') {
    return [
        isbn.substring(0, 1),
        isbn.substring(1, 4),
        isbn.substring(4, 9),
        isbn.substring(9, 10)
    ].join(ISBN_GROUPS_SEPARATOR);
}

function isValidIsbn13(isbn = '') {
    let result = false;

    if (/^(978|979)[\d]{10}$/i.test(isbn)) {
        result = [...isbn].reduce((accumulator, value, index) => {
            return accumulator + ((index % 2 === 0) ? 1 : 3) * +value;
        }, 0) % 10 === 0;
    }

    return result;
}

function isValidIsbn10(isbn = '') {
    let result = false;

    if (/^[\d]{9}[\dX]$/i.test(isbn)) {
        result = [...isbn.toUpperCase()].reduce((accumulator, value, index) => {
            return accumulator + ((10 - index) * +((index === 9 && value === 'X') ? 10 : value));
        }, 0) % 11 === 0;
    }

    return result;
}

export function hyphenateIsbn(isbn = '') {
    let result = '';

    if (isValidIsbn10(isbn)) {
        result = hyphenateIsbn10(isbn);
    } else if (isValidIsbn13(isbn)) {
        result = hyphenateIsbn13(isbn);
    }

    return result;
}

export function isValidIsbn(isbn = '') {
    return isValidIsbn10(isbn) || isValidIsbn13(isbn);
}