# UI Client
UI Client is an open source client to use for Agar.io private servers. Feel free to use this client to play with your friends or make a game, but please give credit :)

# Contact xAz
If you would like to contact me, you can reach me on Discord: ``!!!xAzz#8135`` or Skype: ``thexaz_``

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
  
# Installation
Upload the zip file to your FTP server and extract it. To host your own Minimap/Chat/Skins, it will require a server with NodeJS 6+. To install the minimap server, go to ``/socket/`` directory and type command ``npm install``. Once the modules have finished installing, do ``node minimap.js`` for the server to start on port :9700.

To edit the socket server ip in the client, open the file ``core.js`` in ``/js/`` directory and go to line 52 and replace ``127.0.0.1:9700`` with the ip of your server you are hosting on and the default port 9700. Example: ``31.220.59.33:9700``

To host your own MultiOgar server, head over to -> https://github.com/Megabyte918/MultiOgar-Edited/
