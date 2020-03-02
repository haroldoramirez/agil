angular.module('agil')
//CONTROLLER DA TELA PRINCIPAL
.controller('pagina1.controller', function ($scope, $rootScope, $state, $q, $timeout, $stateParams, CentroDeCusto, FontePagadora, GastoEspecifico, NaturezaGasto) {

    //Controller responsavel por resgatar dados do banco de dados e logicas de negocio do front-ent

    $scope.trProduto = {};
    $scope.trProduto.descricao = "Neste campo deverá ser incluído todo e qualquer tipo de informação técnica referente ao produto solicitado para compra. Considerações:\n" +
        "\n" +
        "- Informar nome técnico e/ou comercial entre parênteses para facilitar buscas no mercado.\n" +
        "\n" +
        "- Possíveis aplicações.\n" +
        "Exemplo: Aquisição de Válvula (Esta peça será usada para fazer a ligação da tubulação XXX sendo necessária para XXXX)\n" +
        "\n" +
        "- Patrimônio(No caso de substituição ou conserto).\n" +
        "\n" +
        "- Informar/Sugerir fornecedores para itens de difícil aquisição.";

    $scope.fontePagadora = "";
    $scope.gestorCC = "";

    $scope.init = function() {

        CentroDeCusto.getAll(function(data) {
            $scope.centrosdecustos = data;
            console.log($scope.centrosdecustos);
        });

    };

    $scope.changeCentroDeCusto = function() {

        if ($scope.trProduto.centrodecusto === undefined) {

            $scope.gestorCC = "";
            $scope.fontePagadora = "";
            $scope.trProduto.naturezagasto = {};

        } else {

            $scope.fontePagadora = $scope.trProduto.centrodecusto.fontePagadora.nome;
            $scope.gestorCC = $scope.trProduto.centrodecusto.gestorCC;

            NaturezaGasto.getCentroDeCustos({id:$scope.trProduto.centrodecusto.id}, function(data) {
                $scope.naturezasdegastos = data;
            });

        }

    };

    $scope.changeNaturezaDeGasto = function() {

        if ($scope.trProduto.naturezagasto === undefined) {

            $scope.trProduto.gastosespecificos = {};

        } else {

            GastoEspecifico.getNaturezaDeGastos({id:$scope.trProduto.naturezagasto.id}, function(data) {
                $scope.gastosespecificos = data;
            });

        }

    };

    //funcao chamada pelo ngClick
    $scope.pagina2 = function() {

        //Transfere os dados digitados no input para o scope raiz, assim podemos enviar para a outra controller
        $rootScope.trProduto = $scope.trProduto;

        //muda o state para a pagina 2
        $state.go('pagina2');

    };

}).controller('pagina2.controller', function ($scope, $rootScope, $state) {

    //Os valores do objeto depende da tela anterior, por isso se recarregar a pagina, ele perde o objeto preenchido, entao retorne para o inicio
    //DESCOMENTAR EM MOTO DE PRODUCAO
    if (typeof $rootScope.trProduto === "undefined") {
        //retorna para a pagina1
        $state.go('pagina1');
    }

});

