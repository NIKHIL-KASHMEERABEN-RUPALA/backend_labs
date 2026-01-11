const os = require('os');

const up = os.uptime();

const inHours = up/3600;

console.log("The time since the laptop is working is :      ",inHours);