const { ipcMain, nativeTheme } = require('electron/main')

const configDarkMode = () => {
    console.log('Configuring Dark Mode...')
    ipcMain.handle('dark-mode:toggle', () => {
        if (nativeTheme.shouldUseDarkColors) {
            nativeTheme.themeSource = 'light'
        } else {
            nativeTheme.themeSource = 'dark'
        }
        return nativeTheme.shouldUseDarkColors
    })

    ipcMain.handle('dark-mode:system', () => {
        nativeTheme.themeSource = 'system'
    })
    console.log('Dark Mode configuration complete.')
}

module.exports = { configDarkMode }

