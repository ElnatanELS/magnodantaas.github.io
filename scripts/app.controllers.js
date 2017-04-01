app.controller('bodyController', function($scope){
  $scope.eu = {
    nome: 'Magno Miranda Dantas',
    cargo: 'Graduando em Sistemas de Informação',
    foto: 'images/magno.jpg',
    telefone: '(83) 9.9619-3200',
    links:[{
      foto:'images/icon_gmail.png',
      link:'mailto:magnodantas1991@gmail.com'
    },
    {
      foto:'images/icon_git.png',
      link:'https://github.com/magnodantaas'
    },
    {
      foto:'images/icon_linkedin.png',
      link:'https://www.linkedin.com/in/magno-miranda-dantas-173268101/'
    },
    {
      foto:'images/icon_plus.png',
      link:'https://plus.google.com/+MagnoDantasUFCG'
    }]

  };

  $scope.ano = new Date().getFullYear();
});

app.controller('mainController', function($scope, MainService){


  $scope.curriculo = MainService.getCurriculo();

  $scope.orcamento = {};




  $scope.solicitarOrcamento = function(){
    MainService.orcamentos.push($scope.orcamento);
    $scope.orcamento = {};
    }
});

app.controller('DashboardController', function($scope, MainService){
    $scope.orcamentos = MainService.orcamentos;
});
