(function(){
  // modulos é onde é escrito pedaços da aplicação Angular e onde são definidas
  // as dependencias do aplicativo
  var app = angular.module("loja", ["diretivas-produtos"]); // [ dependencias ]

  // controllers definem o comportamento do aplicativo(funçoes e valores)
  app.controller("AnalisesController", function(){
    this.analise = {};

    this.addAnalise = function(produto) {
      this.analise.criadaEm = Date.now();
      produto.analises.push(this.analise);
      this.analise = {};
    };
  });

  // Dependency Injection
  //                                Serviço     Serviço como Argumento
  //                                    |                 |
  app.controller("LojaController", [ "$http", function($http) {
    var loja = this;
    var produtos;

    // iniciar array para carregar mais rápido,
    // porque a pagina carrega antes de receber os dados
    loja.produtos = [];

    $http({
      method: "GET",
      url: "produtos.json"
    }).then(function(result){
      loja.produtos = result.data;
    });
    // $http.get("produtos.json").then(function(result){
    //   // se usar 'this' puro o serviço será referenciado e não a loja
    //   loja.produtos = result.data;
    //
    // });
  }]);

})();
