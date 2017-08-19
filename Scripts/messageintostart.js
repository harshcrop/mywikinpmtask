var prompt = require("prompt");


prompt.start({message: "Hello"});



prompt.get(['num_1', 'num_2'], function (err, result) {
    //
    // Log the results.
    //
    console.log(('Show the Number:'));
    console.log('  First Number: ' + result.num_1);
    console.log('  Second Number: ' + result.num_2);
  });