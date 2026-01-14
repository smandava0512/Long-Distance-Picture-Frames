const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Distance Frames",
        width: 1200,
        height: 800,
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true
    });
  
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadURL(startUrl);

}


app.whenReady().then(createMainWindow);