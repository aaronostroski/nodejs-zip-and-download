# Desafio Mission Brasil
> Aplicação server-side com NodeJs.
### Objetivo

> O objetivo desse desafio foi construir uma aplicação onde o **Endpoint** deve baixar essas imagens, compactá-las em um arquivo e permitir o download desse arquivo.

### Checklist

> - [x] Download de imagens
> - [x] Compactá-las em um arquivo
> - [x] Permitir download do arquivo

### Requisitos para rodar o projeto

> * [Node.js](https://nodejs.org/en/) >= versão 8
> * [npm](https://www.npmjs.com/get-npm) >= versão 6

### Pacotes utilizados para fazer o projeto

> * [express](https://github.com/expressjs/express)
> * [axios](https://github.com/axios/axios)
> * [adm-zip](https://www.npmjs.com/package/adm-zip)
> * [fs](https://nodejs.org/api/fs.html)

### Como instalar e iniciar o projeto

> Baixe o zip do projeto ou clone para sua área de trabalho e navegue até onde se encontra pasta do projeto através do **Node.js prompt command**. Em seguida escreva as instruções:

```sh
 cd nodejs-prova-backend
 npm install
 npm start
```

### Baixando o arquivo compactado

> Após o start da aplicação, o servidor inicializará na **porta 3000**. O download das [imagens](src/config/anexo_01.js) é automatico, o sistema irá baixar os arquivos e logo em seguida irá compactá-las. Para baixar o arquivo compactado do servidor, basta acessar a rota **"/download"** no seu navegador.

```sh
 http:/localhost:3000/download
```

### App Skeleton

```sh
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── index.js
│   │   ├── routes
│   │   │   ├── download.js
│   │   ├── controller
│   │   │   ├── DownloadImage.js
│   │   │   ├── ErrorHandler.js
│   │   ├── config
│   │   │   ├── anexo_01.js
```

### License

> This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
