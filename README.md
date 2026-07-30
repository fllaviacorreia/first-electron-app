# Learning Electron App

## Descrição
Este é um repositório com o início de uso do framework Electron.
O foco aqui foi compreender como estruturar inicialmente um projeto, quais as necessidades e como organizar tudo.

## Tecnologias
- NodeJS
- NPM
- package Electron
- HTML
- Javascript

## Passo a passo (seguindo a doc)

### Parte 1

#### Estrutura básica do projeto
Crie uma pasta do seu projeto 

```(bash)
mkdir your_folder_name 
cd your_folder_name
```

Inicie um novo projeto Node e configure os dados

```(bash)
npm init
```

Instale a biblioteca electron

```(bash)
npm install electron --save-dev
```

Crie o arquivo main.js ou index.js e adicione (o mesmo que foi configurado na criação do projeto)

```(bash)
console.log('Hello from Electron 👋')
```

Adicione no package.json o script para start com electron.

```(bash)
 "scripts": {
    "start": "electron .",
 }
```

Para iniciar o projeto rode no terminal

```(bash)
npm run start
```

#### Implementando melhorias

- Em cima desse projeto base e seguindo a documentação foi criado um arquivo .HTML
- Foi adicionado o template da página do docs.
- Foi adicionado em main.js o código para criação de uma janela
- Foi adicionado um código de lifecycle da janela

### Parte 2

#### Implementando o preload

- Foi criado o arquivo `preload.js` para expor as funções/processos necessários em 'versões'.
- Foi criado o `renderer.js` para utilizar-se do dom e funções como `getElementById`
- Foi modificado o `createWindow` para chamar o preload
- Foi adicionado o script `renderer.js` e a tag de parágrado com o ido configurado em `index.html`

#### Comunicação entre processos

![warning icp renderer invoke](./assets/readme/warning_icp.png)

- Foi adicionada a chamada de invocação com ping do IPC renderer em `preload.js`
- Foi adicionado o IPC Main com handle em `main.js`
- Foi adicionado o ping em `renderer.js`

### Parte 3


### Parte final

#### Implementando o electron forge
```text
Electron does not have any tooling for packaging and distribution bundled into its core modules. Once you have a working Electron app in dev mode, you need to use additional tooling to create a packaged app you can distribute to your users (also known as a distributable). Distributables can be either installers (e.g. MSI on Windows) or portable executable files (e.g. .app on macOS).

Electron Forge is an all-in-one tool that handles the packaging and distribution of Electron apps. Under the hood, it combines a lot of existing Electron tools (e.g. @electron/packager, @electron/osx-sign, electron-winstaller, etc.) into a single interface so you do not have to worry about wiring them all together.
```
- Foi instalada a lib do electron forge
- Foi criado o arquivo `forge.config.js`