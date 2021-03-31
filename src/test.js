const remote = require('remote');

const win = electron.getCurrentWindow();

const matchTrackerButton = document.getElementById("testChange");

matchTrackerButton.click(win.close());