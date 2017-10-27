function dado(){
    var eldado = [1,2,3,4,5,6];
    return eldado;
}

function tirada(dado1,dado2){
    suma = [0,0,0,0,0,0,0,0,0,0,0]
    for(i=0;i<36000;i++){
        let lasuma = dado1[Math.floor(Math.random() * 6) ] + dado2[Math.floor(Math.random() * 6) ];
        switch(lasuma > 1) {
            case 2:
                suma[lasuma - 2]++;
                break;
            case 3:
                suma[lasuma - 2]++;
                break;
            case 4:
                suma[lasuma - 2]++;
                break;
            case 5:
                suma[lasuma - 2]++;
                break;
            case 6:
                suma[lasuma - 2]++;
                break;
            case 7:
                suma[lasuma - 2]++;
                break;
            case 8:
                suma[lasuma - 2]++;
                break;
            case 9:
                suma[lasuma - 2]++;
                break;
            case 10:
                suma[lasuma - 2]++;
                break;
            default:
                suma[lasuma - 2]++;
            
                         }
    }
    return suma;
    
}


eldadito = dado();
eldadito2 = dado();

document.write(tirada(eldadito,eldadito2));