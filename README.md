# UI Client
UI Client is an open source client to use for Agar.io private servers. Feel free to use this client to play with your friends or make a game, but please give credit :)

>---

# Contact xAz
If you would like to contact me, you can reach me on Discord: ``!!!xAzz#8135`` or Skype: ``thexaz_``

>---

# Features
  - Minimap
  - Chat
  - Team Tag
  - Leaderboard Color
  - Custom Hats/Crowns
  - A lot of Settings
  - A lot of Theming options
  - Hotkeys
  - Server Panel
  - Much more!
  
>---

# Installation
## Client
1. Download this repo
2. Unzip UI-Client-master into a folder
3. Upload ``client`` folder to your Web Host FTP
4. Go to your website url

## Minimap, Chat & Skins Server
### Windows
1. Download and install Node.js: https://nodejs.org/en/download/
2. Run the winModulesInstall.bat file
3. Run winStart.bat

**All these files can be found in the ``socket`` folder.**

### Linux:
```bash
# First update your packages:
sudo apt-get update

# Install git:
sudo apt-get install git

# Install node.js:
sudo apt-get install nodejs-legacy npm

# Clone UI-Client:
git clone https://github.com/xAzz/UI-Client.git

# Install dependencies:
cd UI-Client-master/socket
npm install

# Run the server:
sudo node socket.js
```

# Connecting socket to client
1. Open ``core.js`` file
2. Scroll down to line 52
3. Replace ``127.0.0.1:9700`` with the ip you are hosting the socket on.

## Example
```js
# Default:
var socketip = "127.0.0.1:9700";

# Example of changed
var socketip = "31.220.59.33:9700";
```

>---

**To host your own MultiOgar server, head over to -> https://github.com/Megabyte918/MultiOgar-Edited/**
