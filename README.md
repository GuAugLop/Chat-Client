<img align="left" src="https://raw.githubusercontent.com/Ted2370/Chat-Client/main/public/logo.png" height="150" /> <h1>React-Chat</h1>

Esse é um projeto com o intuito de simular um Chat Real-Time. Criado com React + Socket.io-Client para front-end, backend desenvolvido em NodeJS + Express + Socket.io. O armazenamento é persistente, mantendo os dados salvos no lado do client, mas com atualizações futuras para garantir a persistência das mensagens do lado do servidor, garantindo a recuperação de mensagens mesmo o usuário estando desconectado.

<br><br>

## Screenshots

<div style="display: flex; justify-content: space-around;">
<img src="https://raw.githubusercontent.com/Ted2370/Chat-Client/main/screenshots/screenshot01.png" height="410" />
<img src="https://raw.githubusercontent.com/Ted2370/Chat-Client/main/screenshots/screenshot02.png" height="410"  />  
</div>

## Aplicação no GH-Pages

<a href="https://guauglop.github.io/Chat-Client/">React-Chat</a> - <strong>Abra em navegadores diferentes, ou chame um amigo para testar com você!</strong>

## Funcionalidades

<ul>
<li>  Envio de mensagens em tempo real para outros usuários conectados </li>
<li>  Persistência das mensagens no navegador depois de recarregar a página </li>
<li>  <strong>Em Breve</strong> - Distinção de multiplos usuários conectados por nome ou cores </li>
</ul>

## Chat-Server
Aplicação node para você rodar seu servidor de recepção de mensagens na sua própria máquina <br>
<a href="https://github.com/Ted2370/Chat-Server">Chat-Server</a>

## Comandos para o projeto

Dentro do Diretório do projeto, rode os seguintes comandos:

### `npm install`

Com esse comando, você irá instalar todas as dependências do projeto.

### `npm start`

Com esse comando, você irá iniciar um servidor local para realizar testes do projeto

### `npm build`

Para Buildar o projeto à uma versão de produção - <strong>Sem necessidade de utilização</strong>
