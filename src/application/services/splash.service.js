/* @ngInject */
export class SplashService {
    ready() {
        document
            .querySelector('.application-splash')
            .classList
            .add('ready');
    }
}

export const SPLASH_SERVICE_NAME = 'splashService';