angular
    .module
        ('agil',
            ['ui.router',
             'ngResource',
             'ngAnimate',
             'ncy-angular-breadcrumb',
             'ui.utils.masks',
             'toastr'
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
      })
      // Cache-busting strategy
      // Logica responsavel para que cada deploy da aplicacao seja com o codigo atualizado, sem precisar resetar caches de navegadores
      .config(['$httpProvider', function($httpProvider) {

        //var __version_number = 6.0; // cacheBustSuffix = Date.now('U'); // 'U' -> linux/unix epoch date int
          //a versao number precisa ser diferente para funcionar o cache-busting
        var __version_number = Date.now('U').getSeconds(); // cacheBustSuffix = Date.now('U'); // 'U' -> linux/unix epoch date int

          $httpProvider.interceptors.push(function () {
            return {
              'request': function (config) {
                // !!config.cached represents if the request is resolved using
                // the angular-templatecache
                if (!config.cached) {
                  config.url += ((config.url.indexOf('?')>-1)?'&':'?') + config.paramSerializer({v: __version_number});
                } else if (config.url.indexOf('no-cache') > -1) {
                  // if the cached URL contains 'no-cache' then remove it from the cache
                  config.cache.remove(config.url);
                  config.cached = false; // unknown consequences
                  // Warning: if you remove the value form the cache, and the asset is not
                  // accessable at the given URL, you will get a 404 error.
                }
                return config;
              }
            }
          });
        }]);