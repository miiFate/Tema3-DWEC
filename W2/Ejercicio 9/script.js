function dado(){
    var eldado = [1,2,3,4,5,6];
    return eldado;
}

function combinaciones(){
    var combinacion = [];
    for(var i = 0; i < 5; i++){
        combinacion[i] = [];
        for(var j = 0;j < 5;j++){
            combinacion[i][j] = 0;
        }
    }
    return combinacion
}
console.log(combinaciones());
    

