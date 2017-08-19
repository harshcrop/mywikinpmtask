var prompt = require("prompt");
var colors = require("colors/safe")


prompt.start();

prompt.get(['num_1', 'num_2'], function (err, result) {
    //
    // Log the results.
    //
    console.log(colors.yellow('Show the Number:'));
    console.log('  First Number: ' + result.num_1);
    console.log('  Second Number: ' + result.num_2);
  });