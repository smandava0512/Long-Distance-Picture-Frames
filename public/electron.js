const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');
const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: (channel, data) => ipcRenderer.send(channel, data),
    on: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args)),
  },
});


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