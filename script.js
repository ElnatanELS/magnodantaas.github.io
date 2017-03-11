var pessoa = {
  nome: 'Magno Miranda Dantas',
  cargo: 'Estudante da Unifacisa',
  foto: 'magno.jpg',
  telefone: 'Telefone = (83) 99619-3200'
}

document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('foto-cabecalho').src = pessoa.foto;
document.getElementById('telefone-cabecalho').innerHTML = pessoa.telefone;
