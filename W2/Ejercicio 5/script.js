function paresImpares (){
    var lalista = [];
    var lispar = [];
    var lisim = [];
    for (var i = 0;i <101;i++){
        var numero = Math.floor((Math.random() * 1000) + 1);
        
        if (numero % 2 == 0){
            lispar.push(numero);
        }
        else {
            lisim.push(numero);
        }
    }
    lalista = lispar.concat(lisim);
    return lalista;
}

document.write(paresImpares());