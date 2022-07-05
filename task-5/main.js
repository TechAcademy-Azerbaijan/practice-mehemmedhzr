const prompt = require('prompt');
prompt.start();

prompt.get('input', function (err, result) {
let n = result.input.split(',');
let a = n[0]
let b = n[1]
let c = n[2]
let d = n[3]
let arr = [a,b,c,d]
let max = Math.max(...arr)
console.log(max);
})
