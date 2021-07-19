// ./build_installer.js

// 1. Import Modules
const { MSICreator } = require('electron-wix-msi');
const path = require('path');

// 2. Define input and output directory.
// Important: the directories must be absolute, not relative e.g
// appDirectory: "C:\Users\17194\Desktop\GitHub\IT-Ticket-Logger\builds\it-ticket-logger-win32-ia32",
const APP_DIR = path.resolve(__dirname, './builds/it-ticket-logger-win32-ia32');
// outputDirectory: "C:\\Users\sdkca\Desktop\windows_installer",
const OUT_DIR = path.resolve(__dirname, './windows_installer');

// 3. Instantiate the MSICreator
const msiCreator = new MSICreator({
  appDirectory: APP_DIR,
  outputDirectory: OUT_DIR,

  // Configure metadata
  description: 'IT Ticket Logger',
  appIconPath: 'C:/Users/17194/Desktop/GitHub/IT-Ticket-Logger/assets/icon.ico',
  exe: 'it-ticket-logger',
  name: 'IT Ticket Logger',
  manufacturer: 'Chimpbite',
  version: '1.0.0',

  // Configure installer User Interface
  ui: {
    chooseDirectory: true,
  },
});

// 4. Create a .wxs template file
msiCreator.create().then(function () {
  // Step 5: Compile the template to a .msi file
  msiCreator.compile();
});
