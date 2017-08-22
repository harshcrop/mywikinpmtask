var sys = require('util')
var exec = require('child_process').exec;
var child;
// executes `pwd`
child = exec("pwd", function (error, stdout, stderr) {
  util.print('stdout: ' + stdout);
  util.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
// or more concisely
var util = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { util.puts(stdout) }
exec("ls -la", puts);