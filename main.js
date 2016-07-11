const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 680,
    icon: `${__dirname}/icon/app.png`
  });
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
