const { app, BrowserWindow, ipcMain} = require('electron/main')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    // here is the message handler for the 'ping' event from the renderer process
    ipcMain.handle('ping', () => 'pong') // handle the 'ping' event from the renderer process
    createWindow();

    //Open a window if none are open (macOS)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

})

// Quit the app when all windows are closed (Windows & Linux)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
