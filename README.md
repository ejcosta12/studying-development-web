<h3 align="center">
  Aplicando API REST com NodeJS
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ejcosta12/studying-project-nodejs">
  <img alt="javaScript" src="https://img.shields.io/github/languages/top/ejcosta12/studying-project-nodejs">
  <img alt="Size" src="https://img.shields.io/github/repo-size/ejcosta12/studying-project-nodejs">
</p>

## Sobre
API desenvolvida para simular a criação, listagem, atualização e exclusão de repositórios no GitHub. Também é possível adicionar like nos repositórios criados.

### Tecnologias

- NodeJs
- Nodemon
- Express
- Cors
- UuidV4

### Scripts CLI

#### yarn
Instalação de todas as dependências necessárias.

#### yarn dev:server
Inicialização do sistema pelo node, porta 3333.

#### Testes
Foram realizados testes utilizando o software insomnia, através das seguintes rotas:

- POST http://localhost:3333/repositories

Exemplo body(JSON):
```js
{
	"title": "studying-nodejs",
	"url": "https://github.com/ejcosta12/studying-nodejs",
	"techs": [
		"Express",
		"Cors",
		"UuidV4"
	]
}
```

- GET http://localhost:3333/repositories

- POST http://localhost:3333/repositories/:id/like

- PUT http://localhost:3333/repositories/:id

Exemplo body(JSON):
```js
{
	"title": "studying-nodejs",
	"url": "https://github.com/ejcosta12/studying-nodejs",
	"techs": [
		"Express",
		"Cors",
		"UuidV4"
	]
}
```
- DELETE http://localhost:3333/repositories/:id