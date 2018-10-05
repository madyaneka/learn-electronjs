const { app, BrowserWindow } = require('electron')

let createWindow = () => {

  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600
  })

  // Load the index.html of the app.
  win.loadFile('index.html')

}

app.on('ready', createWindow)
