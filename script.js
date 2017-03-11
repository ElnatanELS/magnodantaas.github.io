var pessoa = {
  nome: 'Magno Miranda Dantas',
  cargo: 'Estudante da Unifacisa',
  foto: 'magno.jpg',

}

document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('foto-cabecalho').src = pessoa.foto;
