const path = require ("node:path");
const { app, BrowserWindow, ipcMain } = require ("electron");

let mainWindow: typeof BrowserWindow;

function createWindow(): void {
	mainWindow = new BrowserWindow ({
		width: 1280,
		height: 720,
		frame: false,
		transparent: true,
		show: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});

	mainWindow.webContents.loadFile (path.join(__dirname, "../../static", "index.html"));

	mainWindow.webContents.once ("ready-to-show", () => mainWindow.show());
}

ipcMain.on ("minimize-window", () => mainWindow.minimize());
ipcMain.on ("resize-window", () => {
	if (mainWindow.isMaximized())
		mainWindow.unmaximize();
	else
		mainWindow.maximize();
});
ipcMain.on ("close-window", () => mainWindow.close());

app.once ("ready", () => createWindow());
app.once ("window-all-closed", () => app.quit());