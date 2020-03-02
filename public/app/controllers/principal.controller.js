angular.module('agil')
//CONTROLLER DA TELA PRINCIPAL
.controller('principal.controller', function ($scope, $state, $q, $timeout) {
    //Controller responsavel por resgatar do banco a quantidade de calculos salvos
    $scope.pagina1 = function() {
        //muda o state para a pagina 2
        $state.go('pagina1');

    };

});