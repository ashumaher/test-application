import {uuid} from '../util/uuid.js';
import {extractExtension} from '../util/extract-extension.js';

import {APPLICATION_CACHE_KEY_IMAGES} from '../config.js';

/* @ngInject */
export class ImageService {
    constructor(
        $q
    ) {
        'ngInject';

        this.$q = $q;
    }

    saveToCache(file) {
        let deferred = this.$q.defer();

        const reader = new FileReader();
        const fileName = uuid();
        const fileExtension = extractExtension(file.name);
        const fileFullName = [
            fileName,
            fileExtension
        ].join('.');

        reader.onload = () => {
            const response = new Response(reader.result);

            caches.open(
                APPLICATION_CACHE_KEY_IMAGES
            ).then(cache => {
                cache.put(
                    fileFullName,
                    response
                ).then(() => {
                    deferred.resolve(fileFullName);
                });
            });
        };

        reader.readAsDataURL(file);

        return deferred.promise;
    }
}

ImageService.$inject = [
    '$q'
];

export const IMAGE_SERVICE_NAME = 'imageService';