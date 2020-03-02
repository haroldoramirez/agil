angular.module('agil')
    .service('Usuario',['$resource',
      function($resource){
        return $resource('usuario/:id', {}, {
            cadastrar: {method: 'POST', url: 'usuario/cadastrar', isArray: false},
            update: {method: 'PUT', url: 'usuario/:id', isArray: false},
            getAll: {method: 'GET', url: 'usuarios', isArray: true},
            reset: {method: 'POST', url: 'reset/senha', isArray: false},
            getFiltroUsuarios: {method: 'GET', url: 'usuarios/filtro/:filtro', isArray: true},
            getAutenticado: {method: 'GET', url: 'current', isArray: false}
        });
    }]).service('CentroDeCusto',['$resource',
    function($resource){
        return $resource('centrosdecusto/:id', {}, {
            getAll: {method: 'GET', url: 'centrosdecustos', isArray: true},
        });
    }]).service('FontePagadora',['$resource',
    function($resource){
        return $resource('fontepagadora/:id', {}, {
            getAll: {method: 'GET', url: 'fontespagadoras', isArray: true},
        });
    }]).service('GastoEspecifico',['$resource',
    function($resource){
        return $resource('gastoespecifico/:id', {}, {
            getAll: {method: 'GET', url: 'gastosespecificos', isArray: true},
        });
    }]).service('NaturezaGasto',['$resource',
    function($resource){
        return $resource('naturezadegasto/:id', {}, {
            getAll: {method: 'GET', url: 'naturezasdegastos', isArray: true},
        });
    }]);