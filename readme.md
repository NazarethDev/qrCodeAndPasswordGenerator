## Utilidades Para E-Commerce

Este aplicativo backen com node.js tem como função e objetivo a geração de Qr Codes e senhas no terminal! 



## Como Executar

A aplicação foi desenvolvida com o uso do Node.js e seu gerenciador de pacotes Node Package Manager (NPM). 

Tendo em vista a praticidade oferecida, para iniciar o aplicativo, abra o diretório do projeto e execute os comandos:

`npm i`

`npm run start`

Caso deseje executar a aplicação e verificar as alterações sendo realizadas em tempo real no arquivo `index.js`, também é possível utilizar o comando no `npm run start:dev` ao invés de `npm run start`.

## Tecnologias Usadas

Esta aplicação usa das seguintes tecnologias:

| Tecnologia   | Versão  |
|--------------|---------|
| NPM          | 10.9    |
| Node         | 22.17   |
| Chalk        | 5.4     |
| Prompt       | 1.3     |
| Qr-terminal  | 0.12    |


## Funcionalidades

### Geração de Códigos QR

Ao se iniciar a aplicação, e selecionar a opção **1**, é solicitado ao ususário um link válido. 

Após a inserção do link, é solicita a seleção entre a geração de um qr code que diretamente no terminal, ou um "normal". A diferença básica é a dimensão do qr code gerado e sua transparência. 

Selecionando uma das opções, o qr code - totalmente funcional - é gerado, com sua saída via terminaç;

### Geração de Senhas Aleatórias

Para se gerar senhas, o sistema aceita diferentes parâmentros, todos configuráveis através do arquivo .env através de seus valores, sendo eles:

- **UPPERCASE_LETTERS** (boolean): disponibiliza o uso de letras maiúsculas nas senhas ou não;

- **LOWERCASE_LETTERS** (boolean): disponibiliza o uso de letras minúsculas na geração das senhas ou não;

- **NUMBERS** (boolean): disponibiliza o uso de letras minúsculas na geração das senhas ou não;

- **SPECIAL_CHARACTERS**(boolean): torna possível a adoção de números nas senhas geradas ou impede esta possibilidade

- **PASSWORD_LENGTH** (number): define o total de caracteres que a senha terá.


Para solicitar a geração de uma senha dentro dos parâmetros definidos no arquivo .env, logo após executar o comando `npm run start` selecione a opção **2**. Após isso, a senha aleatória será disponibilizada no terminal.

## Contato do desenvolvedor

**LinkedIn**: www.linkedin.com/in/lorrannazareth/

**E-mail:**: lorran.nazareth@gmail.com