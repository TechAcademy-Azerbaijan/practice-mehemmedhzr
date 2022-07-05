const prompt = require('prompt');
prompt.start();

prompt.get('input', function (err, result) {
let n = result.input.split(',')
let nth = 1;
let b = n[1];
for(let i = n[0]; i <= b; i++){
    nth = nth*i
    if(nth > 0){
        res = 1
    }
    else if(nth < 0){
        res = -1
    }
    else{
        res = 0
    }
}
console.log(res);
})
