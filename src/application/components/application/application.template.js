export const applicationTemplate = `
<ng-view
    data-ng-if="vm.applicationEnabled"
    autoscroll="true" 
></ng-view>
<div
    data-ng-if="!vm.applicationEnabled"
    layout="row"
    layout-padding
    layout-align="center center"
>
    <div class="md-display-2">Приложение не поддерживается браузером</div>
</div>
`;