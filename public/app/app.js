angular
    .module
        ('agil',
            ['ui.router',
             'ngResource',
             'ngAnimate',
             'ncy-angular-breadcrumb',
             'ui.utils.masks',
             'toastr',
             'ngDialog'
            ]
        )
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({enabled: false, requireBase: false, rewriteLinks: false});

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('principal', {
                url: "/",
                templateUrl: 'assets/app/views/principal.html',
                controller: 'principal.controller',
                  ncyBreadcrumb: {
                    label: 'Principal'
                  },
                activetab: 'principal'
            })
            .state('pagina1', {
                url: "/pagina1",
                templateUrl: 'assets/app/views/paginas/pagina1.html',
                controller: 'pagina1.controller',
                  ncyBreadcrumb: {
                    label: ''
                  },
                activetab: 'pagina1'
            })
            .state('pagina2', {
                url: "/pagina2",
                templateUrl: 'assets/app/views/paginas/pagina2.html',
                controller: 'pagina2.controller',
                  ncyBreadcrumb: {
                    label: ''
                  },
                activetab: 'pagina2'
            })
    //Deixa o link ativado quando estiver em um determinado estado - utilizado no menu gaveta
    }).run(function($rootScope, $state) {
        $rootScope.$state = $state;
    //Muda de titulo apos a troca de pagina
    }).config(function($breadcrumbProvider) {
        $breadcrumbProvider.setOptions({
            template: '<a class="navbar-brand" ng-repeat="step in steps">{{step.ncyBreadcrumbLabel}}</a>'
        });
    })
    //Config do dialog do sistema
    .config(['ngDialogProvider', function (ngDialogProvider) {
        ngDialogProvider.setDefaults({
            className: 'ngdialog-theme-default',
            showClose: true,
            closeByDocument: true,
            closeByEscape: true
        })
    }])
    /*Configuracao de loading*/
    .config(function($provide) {
        $provide.decorator('$q', ['$delegate', '$rootScope', function($delegate, $rootScope) {
            var pendingPromisses = 0;
            $rootScope.$watch(
                function() { return pendingPromisses > 0; },
                function(loading) { $rootScope.loading = loading; }
            );
            var $q = $delegate;
            var origDefer = $q.defer;
            $q.defer = function() {
                var defer = origDefer();
                pendingPromisses++;
                defer.promise.finally(function() {
                    pendingPromisses--;
                });
                return defer;
            };
            return $q;
        }])
    }).config(function(toastrConfig) {
        angular.extend(toastrConfig, {
          positionClass: 'toast-bottom-center',
          allowHtml: false,
          closeButton: true,
          closeHtml: '<button>&times;</button>',
          extendedTimeOut: 1000,
          iconClasses: {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning'
          },
          messageClass: 'toast-message',
          onHidden: null,
          onShown: null,
          onTap: null,
          progressBar: true,
          tapToDismiss: true,
          templates: {
      	  toast: 'directives/toast/toast.html',
      	  progressbar: 'directives/progressbar/progressbar.html'
      	},
          timeOut: 5000,
          titleClass: 'toast-title',
          toastClass: 'toast'
        });
      });