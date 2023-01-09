const { ipcRenderer } = require ("electron");

const windowMinimizeButton: HTMLElement = document.getElementById ("windowMinimizeButton")!;
const windowResizeButton: HTMLElement = document.getElementById ("windowResizeButton")!;
const windowCloseButton: HTMLElement = document.getElementById ("windowCloseButton")!;

windowMinimizeButton.addEventListener ("click", () => {
	ipcRenderer.send ("minimize-window");
});
windowResizeButton.addEventListener ("click", () => {
	ipcRenderer.send ("resize-window");
});
windowCloseButton.addEventListener ("click", () => {
	ipcRenderer.send ("close-window");
});