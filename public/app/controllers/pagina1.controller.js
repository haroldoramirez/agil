angular.module('agil')
//CONTROLLER DA TELA PRINCIPAL
.controller('pagina1.controller', function ($scope, $rootScope, $state, $q, $timeout, $stateParams, CentroDeCusto, FontePagadora, GastoEspecifico, NaturezaGasto, ngDialog) {

    //Controller responsavel por resgatar dados do banco de dados e logicas de negocio do front-ent
    if (typeof $rootScope.trProduto === "undefined") {

        $scope.trProduto = {};

        $scope.trProduto.descricao = "Neste campo deverá ser incluído todo e qualquer tipo de informação técnica referente ao produto solicitado para compra. Considerações:\n" +
            "\n" +
            "- Informar nome técnico e/ou comercial entre parênteses para facilitar buscas no mercado.\n" +
            "\n" +
            "- Possíveis aplicações.\n" +
            "Exemplo: Aquisição de Válvula (Esta peça será usada para fazer a ligação da tubulação XXX sendo necessária para XXXX)\n" +
            "\n";

        $scope.fontePagadora = "";
        $scope.gestorCC = "";
        $scope.trProduto.patrimonio = "N/A";
        $scope.trProduto.tipocompra = "N/A";

        $scope.init = function() {

            CentroDeCusto.getAll(function(data) {
                $scope.centrosdecustos = data;
            });

        };

    } else {

        $scope.fontePagadora = $rootScope.trProduto.centrodecusto.fontePagadora.nome;
        $scope.gestorCC = $rootScope.trProduto.centrodecusto.gestorCC;
    }

    $scope.changeCentroDeCusto = function() {

        if ($scope.trProduto.centrodecusto === undefined) {

            $scope.gestorCC = "";
            $scope.fontePagadora = "";
            $scope.trProduto.naturezagasto = {};
            $scope.trProduto.gastoespecifico = {};

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

    $scope.confirmarCadastro = function(trProduto) {

        //Transfere os dados digitados no input para o scope raiz, assim podemos enviar para a outra controller
        $rootScope.trProduto = trProduto;

        var newScope = $scope.$new();
        newScope.trProduto = trProduto;

        ngDialog.open({
            scope: newScope,
            template: 'confirmarDialogo',
            controller:'detalhe.produto.controller',
            width: '50%'
        });

    };

})
.controller('detalhe.produto.controller', function ($scope) {

    $scope.criaPDF = function() {

        let agora = new moment(Date.now()).format('DD-MM-YYYY - HH:mm:ss');

        //CONTEUDO DA TABELA
        let minhaTabela = "<div id=\"tabela\">\n" +
            "    <table>\n" +
            "        <tr>\n" +
            "            <th id=\"externo\">\n" +
            "                <table>\n" +
            "                    Dados da Compra\n" +
            "                    <tr>\n" +
            "                        <td>Número Chamado: <b> " + $scope.trProduto.numero + "</b></td>\n" +
            "                        <td>Solicitante: <b>" + $scope.trProduto.solicitante + "</b></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <!-- puxar id + nome do cc -->\n" +
            "                        <td>Centro de custo: <b>" + $scope.trProduto.centrodecusto.nome + " - " + $scope.trProduto.centrodecusto.nomeCC + "</b></td>\n" +
            "                        <td>Fonte Pagadora:<b>" + $scope.trProduto.centrodecusto.fontePagadora.nome + "</b></td>\n" +
            "\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <!-- descrição na tabela fonte pagadora-->\n" +
            "                        <td>Convênio/Cliente: <b>" + $scope.trProduto.centrodecusto.fontePagadora.descricao + "</b></td>\n" +
            "                        <td>Etapa/Meta/Submeta:<b>" + $scope.trProduto.etapaMetaSubmeta + "</b></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td>Natureza do Gasto: <b>" + $scope.trProduto.naturezagasto.codigo + "</b></td>\n" +
            "                        <td>Gasto específico: <b>" + $scope.trProduto.gastoespecifico.nome + " - " + $scope.trProduto.gastoespecifico.descricao + "</b></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td>Conta contábil: <b>" + $scope.trProduto.gastoespecifico.contaContabil + "</b></td>\n" +
            "                        <td>Conta orçamentária: <b>" + $scope.trProduto.gastoespecifico.contaOrcamentaria + "</b></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td>Número da SC*:</td>\n" +
            "                        <td>Número do PC*: </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td>Modalidade da Contratação*:</td>\n" +
            "                        <td>Número do processo*:</td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td colspan=\"2\"><b>Condição de pagamento: 30 dias após o atesto recebimento do fiscal técnico na nota fiscal e/ou conforme acordado em instrumento jurídico</b></td>\n" +
            "                    </tr>\n" +
            "                </table><bR>\n" +
            "                Dados do Produto\n" +
            "                <table style=\"width:100%;\">\n" +
            "                    <tr>\n" +
            "                        <td>Patrimônio: <b>" + $scope.trProduto.patrimonio + "</b></td>\n" +
            "                        <td>Tipo: <b>" + $scope.trProduto.tipocompra + "</b></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td colspan=\"2\">Descrição do produto:<br><p>" + $scope.trProduto.descricao + "</p></td colspan=\"2\">\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td colspan=\"2\">Justificativa/Objetivo:<br><p>" + $scope.trProduto.justificativa + "</p></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td colspan=\"2\">Justificativa de contratação direta:<br><p>" + $scope.trProduto.justificativaDireta + "</p></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td>Quantidadade total: <b>" + $scope.trProduto.quantidade + "</b></td>\n" +
            "                        <td>Valor estimado: <b>" + $scope.trProduto.valorEstimado + "</b></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td colspan=\"2\">Local de entrega: <b>" + $scope.trProduto.localEntrega + "</b></td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td colspan=\"2\"><b>Garantia do produto e assistência técnica*:</b> </td>\n" +
            "                    </tr>\n" +
            "                </table>\n" +
            "                <div style=\"text-align: center\">\n" +
            "                    <br><br><br>\n" +
            "                    <hr size=\"1\" width=\"50%\"></hr>\n" +
            "                    <b>" + $scope.trProduto.solicitante + "<br></b>\n" +
            "                    <b>Requerente <br><br><br></b>\n" +
            "                    <hr size=\"1\" width=\"50%\">\n" +
            "                    <b>" + $scope.trProduto.centrodecusto.gestorCC + "<br></b>\n" +
            "                    <b>Gestor CC <br><br><br></b>\n" +
            "                    <hr size=\"1\" width=\"50%\">\n" +
            "                    <b>Samuel Campos da Silva<br></b>\n" +
            "                    <b>Diretor Administrativo Financeiro</b>\n" +
            "                </div>\n" +
            "            </th>\n" +
            "        </tr>\n" +
            "    </table>\n" +
            "</div>";

        //ESTILO DA TABELA
        let style = "<style>";
        style = style + "table {width: 100%;font: 15px Calibri;}";
        style = style + "table, th, td {border: solid 2px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: left;}";
        style = style + "</style>";
        // CRIA UM OBJETO WINDOW
        let win = window.open('', '', 'height=700,width=700');
        win.document.write('<html><head>');
        win.document.write('<title style="text-align: left">TR - TERMO DE REFERÊNCIA PARA AQUISIÇÃO DE PRODUTOS '+ agora + '</title>');   // <title> CABEÇALHO DO PDF.
        win.document.write(style);                                     // INCLUI UM ESTILO NA TAB HEAD
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(minhaTabela);                          // O CONTEUDO DA TABELA DENTRO DA TAG BODY
        win.document.write('</body></html>');
        win.document.close();                                            // FECHA A JANELA
        win.print();
    }
});

