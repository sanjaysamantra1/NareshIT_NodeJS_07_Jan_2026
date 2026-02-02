const os = require('os');

console.log('Arch:', os.arch());
console.log('CPUs:', os.cpus().length);
console.log('RAM Total memory:', os.totalmem()/1024/1024/1024);
console.log('RAM Free memory:', os.freemem()/1024/1024/1024);
console.log('hostname:', os.hostname());
console.log('type:', os.type());
console.log('platform:', os.platform());
console.log('tmpdir:', os.tmpdir());
console.log('uptime:', os.uptime()/60/60);