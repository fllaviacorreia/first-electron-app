# First Electron App

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

### Implementando melhorias

- Em cima desse projeto base e seguindo a documentação foi criado um arquivo .HTML
- Foi adicionado o template da página do docs.
- Foi adicionado em main.js o código para criação de uma janela:

```(bash)
// módulos necessários para implementação
const { app, BrowserWindow } = require('electron')

// criação da janela com largura de 800px e altura de 600px
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  // chamada do arquivo index.html
  win.loadFile('index.html')
}

// quando a aplicação estiver pronta, cria-se a janela com o conteúdo do index.html renderizado.
app.whenReady().then(() => {
  createWindow()
})
```

- Foi adicionado um código de lifecycle da janela

```(bash)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
```


```(bash)
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
```