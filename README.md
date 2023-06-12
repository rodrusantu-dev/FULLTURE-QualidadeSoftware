# FULLTURE-QualidadeSoftware
 Módulo de Qualidade de Software do curso de Fullstack da Fullture

## Estrutura Inicial do CUCUMBER

 Iniciando o projeto
Primeiramente, vamos começar criando nosso projeto, crie uma pasta para o projeto, após isso, no terminal digite o comando abaixo:
```
npm init --yes
```
Isso inicia nosso projeto, após isso digite o comando:
```
npm install cucumber --save-dev
```
Com isso, na pasta do projeto, teremos o arquivo package.json. adicione o script:
```
"scripts": {
    "test": "cucumber-js"
  }
  ```
Com isso, o seu pacjage.json deve ficar parecido com o código abaixo:
```
{
  "name": "hellocucumber",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "cucumber-js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "cucumber": "^5.0.3"
  }
}
```
Isto posto, vamos criar a nossa estrutura de pastas, isso é bem simples, basta criar uma pasta chamada features e dentro dela, criar uma pasta chamada step_definitions, ficando uma hierarquia como a abaixo:
```
//pasta raiz
-features
--step_definitions
-node_modules
-package.json
```
Com a estrutura criada, vamos criar um arquivo chamado cucumber.js e colocar o conteúdo:
```
module.exports = {
  default: `--format-options '{"snippetInterface": "synchronous"}'`
}
```
Criaremos também um arquivo chamado stepdefs.js na pasta step_definitions e deixe-o com o conteúdo abaixo:
```
const assert = require('assert');
const { Given, When, Then } = require('cucumber');
```

Feito isso, teremos a estrutura inicial completa, vamos verificar se tudo ocorreu corretamente iniciando um teste com o comando abaixo:

### Run via NPM
```
npm test
```

Se tudo der certo, em seu terminal será exibida uma saída como o exemplo abaixo:

0 Scenarios
0 steps
0m00.000s

Isso significa que o Cucumber está funcionando, mas ainda não encontrou nada para executar.
