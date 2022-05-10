function somarValores(arr){
    return arr.reduce(function (prev,current){
        return prev+ current;
    }, 0);
}


const arr = [47, 9, 3];

console.log (somarValores(arr));
