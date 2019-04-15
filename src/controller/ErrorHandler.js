module.exports = class ErrorHandler {

    static handleError (error, url) {

        if (error.response) {
            console.log(`Parece que houve um problema ao acessar a URL: ${url}. Error code: ${error.response.status}.`);

          } else if (error.request) {
            
             console.log(`Sua requisição chegou ao servidor, porém nenhum resposta foi recebida. Error code: ${error.response.status}.`);

          } else if (error.config) {

             console.log(`Aparentemente aconteceu um erro nas suas configurações. Error code: ${error.response.status}.`)

          }

          console.log(`Error: ${error.message}`);

    }
}