const prompt = require('prompt');
prompt.start();

prompt.get('input', function (err, result) {
let n = result.input;
console.log((n-1) + (n-2));
})
