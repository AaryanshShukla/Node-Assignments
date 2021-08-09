
function add(a,b){
    return a+b;
}

function sub(a,b){
    return b-a;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

var myname = "Aaryansh_Shukla";

module.exports['addition'] = add;
module.exports['substraction'] = sub;
module.exports = { mul , div , myname } ;


// x = 10;
// y = 20;
// console.log(x+y)