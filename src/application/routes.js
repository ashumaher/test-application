export const routes = ($routeProvider, $locationProvider ) => {
    'ngInject';

    $routeProvider
        .when('/', {
            template: '<page-main-component></page-main-component>'
        })
        .when('/edit/:id', {
            template: '<page-edit-component></page-edit-component>'
        })
        .when('/add', {
            template: '<page-edit-component></page-edit-component>'
        });

    $locationProvider.html5Mode(true);
};