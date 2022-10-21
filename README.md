# Typescript Electron and React template

This is a template to provide a ready-to-go project setup with ElectronJS, React, and Typescript. To allow React and Electron to live in the same project, I utilized Webpack strictly for React in order to bundle the files properly into the `/dist` folder. The main process uses the basic typescript compiler.

**NOTE:** I made this project primarily for MacOS. Some additional configuration may be needed for Windows machines.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
https://github.com/jordanarldt/ts-electron-react-template
# Go into the repository
cd ts-electron-react-template
# Install dependencies
npm install
# Run the app
npm start
```

## Usage

### `npm run start`
Builds the React app, compiles the Electron app, and then starts the Electron app. There is no auto-reloading with this command.

### `npm run dev`
Starts the Webpack dev server for React, and starts the Electron app with live-reloading. Allows you to develop both React and Electron at the same time.

**NOTE:** The default port for the React client is `3000`

### `npm run build`
Builds the React app and Electron app, but does not start it.

### `npm run react:build`
Builds the React code with Webpack.

### `npm run react:dev`
Starts the Webpack dev server by itself.

### `npm run main:dev`
Starts the Electron app with live-reloading without starting the React server.

### `npm run forge:package`
Uses electron-forge to package the app files

### `npm run forge:make`
Uses electron-forge to create the release distribution of the Electron app.

