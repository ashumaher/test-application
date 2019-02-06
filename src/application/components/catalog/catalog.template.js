export const catalogTemplate = `
<md-content layout="row" layout-wrap>
    <md-card data-ng-repeat="item in vm.list | orderBy : (vm.order | catalogOrderFilter : vm.direction) | limitTo : vm.limit">
        <card-component
            data-item="item"
            data-on-delete="vm.onDelete(id)"
        ></card-component>
    </md-card>
</md-content>
`;