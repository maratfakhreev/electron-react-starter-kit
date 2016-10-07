const {
  app,
  shell,
  Menu,
  BrowserWindow
} = require('electron');
require('electron-debug')({ showDevTools: false });
const { JSONStorage } = require('node-localstorage');
const config = require('./config/application');

const storage = new JSONStorage(app.getPath('userData'));
const template = [
  {
    label: 'Edit',
    submenu: [
      {
        role: 'cut'
      },
      {
        role: 'copy'
      },
      {
        role: 'paste'
      },
      {
        role: 'delete'
      },
      {
        role: 'selectall'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload();
        }
      },
      {
        type: 'separator'
      },
      {
        role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () {
          shell.openExternal(config.sitePath);
        }
      }
    ]
  }
];

if (process.platform === 'darwin') {
  const name = app.getName();

  template.unshift({
    label: name,
    submenu: [
      {
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        role: 'hide'
      },
      {
        role: 'hideothers'
      },
      {
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        role: 'quit'
      }
    ]
  });

  // Window menu
  template[3].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    }
  ];
}

let mainWindow;
let windowState;

const createWindow = () => {
  const defaultParams = {
    width: 960,
    height: 680,
    minWidth: 800,
    minHeight: 600,
    icon: `${__dirname}/icon/app.png`,
    show: false
  };

  try {
    windowState = storage.getItem('windowstate') || {};
  } catch(e) {}

  const windowParams = (windowState && windowState.bounds) ?
    Object.assign({}, defaultParams, windowState.bounds) :
    defaultParams;

  mainWindow = new BrowserWindow(windowParams);
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

  mainWindow.on('close', () => {
    windowState.bounds = mainWindow.getBounds();
    storage.setItem('windowstate', windowState);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });
};

app.on('ready', () => {
  const menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
