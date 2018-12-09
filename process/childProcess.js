const { spawn } = require('child_process');
const ls = spawn('ls', ['-l', '/etc']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: inicio`);
    console.log(`stdout: ${data}`);
  console.log(`stdout: fim`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});