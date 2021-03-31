const electron = require('electron');
const url = require('url');
const path = require ('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let matchTracker;



// Listen for app to be ready
app.on("ready", function(){

  // Create new window
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    }
  });

  // Load HTML file into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  //Quit app when closed
  mainWindow.on("closed", function(){
    app.quit();
  })
  mainWindow.webContents.openDevTools();
  // Insert the menu
  Menu.setApplicationMenu(null);

  function createMatchWindow(){

  // Create new window
  matchWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: "Match Tracker",
    webPreferences: {
      nodeIntegration: true,
    }
  });

  // Load HTML file into window
  matchWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'matchtracker.html'),
    protocol: 'file:',
    slashes: true
  }));
  // Garbage collection handle
  addWindow.on("close", function(){
    matchWindow = null;
  })
  
}
});


//if(matchTrackerButton.click(createMatchWindow()))