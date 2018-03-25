# Installation
## Minimap, Chat & Skins Server

Before you install, edit ``socket.js`` file and replace ``example.com`` with the domain you are hosting the client on.

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
