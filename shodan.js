/* 
  Originally Created By RudimentalHack
  Copyright 2021 RudimentalHack
  Free To Use, Modify to your liking.
*/

const exec = require('child_process').exec;
const shodan = [
    "104.131.0.69",
    "104.236.198.48",
    "155.94.222.12",
    "155.94.254.133",
    "155.94.254.143",
    "162.159.244.38", 
    "185.181.102.18", 
    "188.138.9.50", 
    "198.20.69.74", 
    "198.20.69.98", 
    "198.20.70.114", 
    "198.20.87.98", 
    "198.20.99.130", 
    "208.180.20.97", 
    "209.126.110.38", 
    "216.117.2.180", 
    "66.240.192.138", 
    "66.240.219.146", 
    "66.240.236.119", 
    "71.6.135.131", 
    "71.6.146.185", 
    "71.6.158.166", 
    "71.6.165.200", 
    "71.6.167.142", 
    "82.221.105.6", 
    "82.221.105.7", 
    "85.25.103.50", 
    "85.25.43.94", 
    "93.120.27.62", 
    "98.143.148.107", 
    "98.143.148.135"
];

function Execute(ip) {
    exec(`sudo iptables -A INPUT -s ${ip} -j DROP`, (error, stdout, stderr) => {
        if (stderr) {
            return console.log(`${stderr}`);
        }
        if (error !== null) {
            console.log(`exec error: ${error}`);
        };
        return console.log(`${ip} Dropped.`);
    });
};

for (const ipAddress of shodan) {
    Execute(ipAddress);
    console.log(ipAddress)
};

