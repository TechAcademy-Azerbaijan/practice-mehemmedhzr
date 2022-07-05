const prompt = require('prompt');
prompt.start();

prompt.get('input', function (err, result) {
let n = result.input
let sqrt = Math.sqrt(n)
for(let i = 1; i < n; i++){
    if(i**2 < n){
        console.log(i**2);
    }
}
})
