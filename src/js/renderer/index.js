"use strict";
const { ipcRenderer } = require("electron");
const windowMinimizeButton = document.getElementById("windowMinimizeButton");
const windowResizeButton = document.getElementById("windowResizeButton");
const windowCloseButton = document.getElementById("windowCloseButton");
windowMinimizeButton.addEventListener("click", () => {
    ipcRenderer.send("minimize-window");
});
windowResizeButton.addEventListener("click", () => {
    ipcRenderer.send("resize-window");
});
windowCloseButton.addEventListener("click", () => {
    ipcRenderer.send("close-window");
});
