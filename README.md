# Agil-TR

### Versão
* **1.0.0**
  * Initial core
  
## Frameworks and tools
* **2.4.11** - [Play Framework](https://playframework.com/) (Java8) - Backend
* **0.13.13** - [Sbt](http://www.scala-sbt.org/0.13/docs/Basic-Def.html) - Scala Build Tool Version
* **1.7.9** - [AngularJS](https://angularjs.org/) with [AdminLTE](https://adminlte.io/) (Javascript and Bootstrap) - Frontend

## Características
* Frontend e Backend unificados (AngularJS with Playframework)
* Dependências são gerenciadas pelo [Bower](https://bower.io/)
* Banco de dados [Postgresql](https://www.postgresql.org/)

## To do
 - [x] Procedimento de deploy em ambiente de produção via universal files Heroku
 - [x] Principais funcionalidades implementadas
 
## Ambiente de produção e comandos
 - Criar distro universal -> sbt universal:package-zip-tarball
 - Criar distro universal -> sbt war
  
### Licença
* PlayFramework - [Apache 2 license](https://www.apache.org/licenses/LICENSE-2.0.html)
* AngularJS - [MIT License](https://github.com/angular/angular.js/blob/master/LICENSE)

### Instituição
Centro Internacional de Energias Renováveis - Biogás - Copyright ® 2020
