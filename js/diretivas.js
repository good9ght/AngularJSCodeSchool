(function(){

  var app = angular.module("diretivas-produtos",[ ]);

  app.directive("produtoTitulo", function() {
    return {
      restrict: "A",
      templateUrl: "produto-titulo.html"
    };
  });

  app.directive("tabsProdutos", function(){
    return {
      restrict: "E",
      templateUrl: "tabs-produtos.html",
      controller: function() {
        this.tab = 1;

          this.foiSelecionada = function(tab) {
            return this.tab === tab;
          }
          this.selecionarTab = function(tabAtiva) {
            this.tab = tabAtiva;
          };
      },
      controllerAs:"tab",
    };
  });

  app.directive("galeriaProdutos", function() {
    return {
        restrict: "E",
        templateUrl: "galeria-produtos.html",
        controller: function() {
          this.atual = 0;

          this.definirAtual = function(numImagem){
            this.atual = numImagem;
          };
        },
        controllerAs: "galeria"
    };
  });

  app.directive("descricaoProduto", function() {
    return {
      restrict:"E",
      templateUrl: "descricao-produto.html",
    };
  });

  app.directive("especificacoesProduto", function() {
    return {
      rescrict: "A",
      templateUrl: "especificacoes-produto.html"
    };
  });

  app.directive("analisesProduto", function() {
    return {
      restrict: "E",
      templateUrl: "analises-produto.html",
    };
  });

})();
