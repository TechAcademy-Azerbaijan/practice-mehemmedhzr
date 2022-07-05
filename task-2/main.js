const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  let n = result.input

if (n === 1) {
    res = "Yes";
}

else if (n > 1) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            res = "No";
            break;
        }
        else if(n % i !== 0){
            res = "Yes"
        }
    }
}
console.log(res);
});
