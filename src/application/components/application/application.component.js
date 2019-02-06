import {applicationTemplate} from './application.template.js';

import {SPLASH_SERVICE_NAME} from '../../services/splash.service.js'
import {SPLASH_DELAY } from '../../config.js'

class ApplicationController {
    constructor(
        $timeout,
        splashService
    ) {
        'ngInject';

        this.applicationEnabled = !!(
            window.Response
            && window.localStorage
            && window.FileReader
            && window.caches
        );

        $timeout(() => {
            splashService.ready()
        }, SPLASH_DELAY );
    }
}

ApplicationController.$inject = [
    '$timeout',
    SPLASH_SERVICE_NAME
];

export const applicationComponent = {
    template: applicationTemplate,
    controller: ApplicationController,
    controllerAs: 'vm'
};

export const APPLICATION_COMPONENT_NAME = 'applicationComponent';