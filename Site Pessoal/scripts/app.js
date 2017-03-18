var app = angular.module('sitePessoal', ['ngRoute']);

app.controller('mainController', function($scope){
  $scope.nome = 'Magno Miranda Dantas';
  $scope.cargo = 'Graduando em Sistemas de Informação';
  $scope.foto = 'images/magno.jpg';
  $scope.telefone = '(83) 9.9619-3200'

  $scope.links = [
    {
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
    }
  ];

  $scope.resumo = [
    'Graduando do 4º Período de Sistemas de Informação pela Unifacisa.',
    'Desenvolvedor das Linguagens Java, Html5, CSS.'
  ];

  $scope.experiencia = ['Monitor da disciplina de Probabilidade e Estatística no Período 2016.2 .'];

  $scope.academico = [
    {
      data:'(2015 - Presente)',
      formacao:'Unifacisa - Sistemas de Informação'
    },
    {
      data:'(2009 - Interrompido)',
      formacao:'UFCG - Engenharia de Biotecnologia e Bioprocessos'
    },
    {
      data:'(2006 - 2008)',
      formacao:'Colégio Djanira Tavares - Ensino Médio'
    }
  ]

  $scope.ano = new Date().getFullYear();
});


//javaScript
// var pessoa = {
//   nome: 'Magno Miranda Dantas',
//   cargo: 'Estudante da Unifacisa',
//   foto: 'magno.jpg',
//
// }
//
// document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
// document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
// document.getElementById('foto-cabecalho').src = pessoa.foto;
