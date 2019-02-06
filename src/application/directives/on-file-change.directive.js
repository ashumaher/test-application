export class OnFileChangeDirective {
    constructor() {
        this.restrict = 'A';
    }

    link(scope, element, attrs) {
        const onChangeHandler = scope.$eval(attrs.onFileChange);

        if (onChangeHandler) {
            element.bind('change', () => {
                scope.$apply(() => {
                    let files = element[0].files;

                    if (files && files.length) {
                        onChangeHandler(files[0]);
                    }
                });
            });
        }
    }
}

export const ON_FILE_CHANGE_DIRECTIVE_NAME = 'onFileChange';