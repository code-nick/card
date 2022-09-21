let a = [10,9,5,4,1];
let r = ["X","IX","V","IV","I"];

let n = 7;
var c= "";
for(let i = 0 ; n>=0; i++){
    if(n >=a[i]){
        c+=r[i];
        n = n - a[i]
    }
}
console.log(c);

