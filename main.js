const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const { configDarkMode } = require('./configs/darkModeToggle')
const { configBluetooth } = require('./configs/webBluetooth')

let bluetoothPinCallback
let selectBluetoothCallback

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // configs
    configBluetooth(mainWindow, ipcMain, bluetoothPinCallback, selectBluetoothCallback)
    configDarkMode()

    mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})