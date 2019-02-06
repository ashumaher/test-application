const results = {};
const processing = {};

export function ImageDataFilter() {
    function transform(fileName, rootScope) {
        if (!processing[fileName]) {
            processing[fileName] = true;

            caches.match(
                fileName
            ).then((response) => {
                return response.text();
            }).then((text) => {
                results[fileName] = text;

                rootScope.$applyAsync();
            }).catch(() => {
            });
        }

        return results[fileName];
    }

    transform.$stateful = true;

    return transform;
}

export const IMAGE_DATA_FILTER_NAME = 'imageDataFilter';