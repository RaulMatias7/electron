const {app, BrowserWindow} = require('electron');
const path = require('path');

function criarTelaPrincipal(){
    let TelaPrincipal = BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            //Este metódo é o responsável por dizer que ficheiro será carregado quando carregar a Tela
            preload: path.join(__dirname, 'preload.js')
        }
    });

    TelaPrincipal.loadFile('index.html');
}

app.whenReady().then(criarTelaPrincipal);