const { error } = require('console');
const fs = require('fs');
const path = require('path');

Criar uma pasta
fs.mkdir(path.join(__dirname, 'test'), (error) => {
  if (error) throw 'Erro: ' + error;

  return console.log('Pasta criada com sucesso!');
});

Criar um arquivo com conteudo, caso o arquivo já exista o conteudo é substituido
fs.writeFile(path.join(__dirname, 'test', 'teste.txt'), 'hello node!', (error) => {
  if (error) {
    return console.log('Erro: ', error);
  }

  console.log('Arquivo criado com sucesso!');

  // Adiciona conteúdo ao arquivo criado acima
  fs.appendFile(path.join(__dirname, 'test', 'teste.txt'), 'hello world!', (error) => {
    if (error) {
      return console.log('Erro: ', error);
    }

    console.log('Informação adicionada com sucesso');
  });

  // Ler arquivo criado
  fs.readFile(path.join(__dirname, 'test', 'teste.txt'), 'utf8', (error, data) => {
    if (error) throw ('Erro: ', error);

    console.log(data);
  });
});
