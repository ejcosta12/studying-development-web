<h3 align="center">
  Sistema Repositório de Projetos - Trabalhando conceitos
</h3>

## Sobre
No back-end API desenvolvida para simular a criação, listagem, atualização e exclusão de repositórios no GitHub. Também é possível adicionar like nos repositórios criados. Front-end e mobile fornecem interface para listagem, criação e remoção de repositórios.

### Tecnologias

- NodeJs
- Nodemon
- Express
- Cors
- UuidV4
- React
- React Native
- Axios

### Scripts CLI

#### /backend
##### yarn
Instalação de todas as dependências necessárias no back-end.

##### yarn dev:server
Inicialização do sistema pelo node, localhost porta 3333.

#### /frontend
##### yarn
Instalação de todas as dependências necessárias no front-end.

##### yarn start
Inicia a aplicação WEB pelo endereço localhost utilizando a porta 3000.

#### /mobile
##### yarn
Instalação de todas as dependências necessárias no mobile.

##### yarn android OU yarn android OU yarn start
Dependendo da vizualização em dispositivo físico ou emulador, utilize um dos comandos.

#### Testes
Foram realizados testes no back-end utilizando o software insomnia, através das seguintes rotas:

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