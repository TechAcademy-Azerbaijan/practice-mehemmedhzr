const prompt = require('prompt');
prompt.start();

prompt.get('input', function (err, result) {
let n = result.input.split(',');
let a = n[0]
let b = n[1]
console.log(a*b);
})
