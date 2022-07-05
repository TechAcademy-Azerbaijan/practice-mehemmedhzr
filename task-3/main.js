const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let arr = result.input.split(',')[0]
let fixed = arr.reverse()
for(let i = 0; i < arr.length; i++){
    console.log(fixed[i]);
}
  
});
