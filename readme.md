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


-----

## Utilities for E-Commerce

This backend application built with Node.js has the purpose of generating QR Codes and passwords directly in the terminal!

## How to Run

The application was developed using Node.js and its package manager, Node Package Manager (NPM).

For convenience, to start the application, open the project directory and run the following commands:

`npm i`

`npm run start`

If you wish to run the application and see the changes happening in real-time in the `index.js` file, you can also use the command `npm run start:dev` instead of `npm run start`.

## Technologies Used

This application uses the following technologies:

| Technology   | Version |
|--------------|---------|
| NPM          | 10.9    |
| Node         | 22.17   |
| Chalk        | 5.4     |
| Prompt       | 1.3     |
| Qr-terminal  | 0.12    |

## Features

### QR Code Generation

When the application starts and option **1** is selected, the user is asked to provide a valid link.

After entering the link, the user is prompted to choose between generating a QR code directly in the terminal or a "normal" one. The basic difference lies in the size of the generated QR code and its transparency.

Once an option is selected, a fully functional QR code is generated and displayed via terminal output.

### Random Password Generation

To generate passwords, the system accepts different parameters, all configurable via the `.env` file, with the following values:

- **UPPERCASE_LETTERS** (boolean): enables or disables the use of uppercase letters in the generated passwords;

- **LOWERCASE_LETTERS** (boolean): enables or disables the use of lowercase letters in the generated passwords;

- **NUMBERS** (boolean): enables or disables the use of numbers in the generated passwords;

- **SPECIAL_CHARACTERS** (boolean): enables or disables the use of special characters in the generated passwords;

- **PASSWORD_LENGTH** (number): defines the total number of characters the password will have.

To request password generation based on the parameters defined in the `.env` file, simply run the command `npm run start` and then select option **2**. After that, the randomly generated password will be displayed in the terminal.

## Developer Contact

**LinkedIn**: www.linkedin.com/in/lorrannazareth/

**E-mail**: lorran.nazareth@gmail.com
