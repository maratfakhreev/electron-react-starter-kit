# Electron React Starter Kit

[![Build Status](https://travis-ci.org/maratfakhreev/electron-react-starter-kit.svg?branch=master)](https://travis-ci.org/maratfakhreev/electron-react-starter-kit)
[![devDependency Status](https://david-dm.org/maratfakhreev/electron-react-starter-kit/dev-status.svg?branch=master)](https://david-dm.org/maratfakhreev/electron-react-starter-kit#info=devDependencies)

Kick-start your desktop application for MacOS/Windows/Linux based on Electron React and Flux technologies. It also includes Webpack, React hot loader, PostCSS tools for even more rapid development.

## NPM Dependencies:

List of all dependencies is presented [here](https://github.com/maratfakhreev/electron-react-starter-kit/blob/master/package.json)

## Install
### OSX

Install Node.js

Via brew:
```bash
brew install node
```

Via nvm:
```bash
brew install nvm
nvm install node
nvm alias default node
```

## Quick start

Clone application as new project with original repository named "electron-react-starter-kit"

```bash
git clone git@github.com:maratfakhreev/electron-react-starter-kit.git --origin electron-react-starter-kit [MY-NEW-PROJECT]
```

Install dependencies

```bash
cd electron-react-starter-kit && npm install
```

## Building Windows apps from non-Windows platforms

Building an Electron app for the Windows platform with a custom icon requires editing the `Electron.exe` file. A Windows executable is bundled in that node package and needs to be run in order for this functionality to work, so on non-Windows host platforms, [Wine](https://www.winehq.org/) 1.6 or later needs to be installed.

Via brew:
```bash
brew install Caskroom/cask/xquartz
brew install wine
```

## Run application

First you should start to watch application folder via webpack to enable hot-reloading

```bash
npm run watch
```

In another terminal window run application

```bash
npm start
```

## Run linters

```bash
npm run lint
```
