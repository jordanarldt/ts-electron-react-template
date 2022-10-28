// This preload file creates the bridge between the Electron "main" process (back-end)
// and the "renderer" process (front-end). We expose "contextBridge" functions on the window
// object of the renderer, which can be called from the document.
import { contextBridge, ipcRenderer } from "electron";

// Any functions exposed here must also be added to the "Window" interface in
// the src/renderer/types/window.d.ts file.
contextBridge.exposeInMainWorld("app", {
  exampleFunction: () => ipcRenderer.sendSync("example-function"),
});
