class Tablero{
    constructor(filas,columnas){
        this.filas = filas;
        this.columnas = columnas
        this.puslenum = 1
    }
    generarTablero(){
        var tableroori = [];
        for(var i = 0;i < this.filas;i++){
            tableroori [i] = [];
            for(var j = 0;j < this.columnas;j++){
                tableroori [i] [j] = this.puslenum;
                this.puslenum++
            }
        }
        tableroori[this.filas - 1][this.columnas - 1] = 0
        return tableroori;
    }
    desordenaTablero(){
        var talbadesor1 = [];
        var tabladesordes = [];
        var tabladesorfin = [];
        var contador = 0
        for(var i = 0; i < this.puslenum - 1;i++){
            talbadesor1.push(i);
        }
        while(tabladesordes.length < talbadesor1.length){
            var nuNumero = talbadesor1[Math.floor(Math.random() * talbadesor1.length)];
            if(tabladesordes.indexOf(nuNumero) == -1){
                tabladesordes.push(nuNumero);
            }
        }
        for(var j = 0;j < this.filas;j++){
            tabladesorfin[j] = [];
            for(var k = 0;k < this.columnas;k++){
                tabladesorfin [j] [k] = tabladesordes[contador];
                contador ++
            }
        }
        
        
        
        return tabladesorfin;

    }
    detectarBlanco(desordenado){
        posicionBlanco = [];
        for(var i = 0;i <this.filas;i++){
            for(var j = 0;j< this.columnas;j++){
                if(desordenado[i][j] == 0){
                    posicionBlanco.push(i);
                    posicionBlanco.push(j);
                }
            }
        }
        return posicionBlanco;
    }
    
    
    mueveBlanco(corx,cory,desordenado){
        posicionNueva = desordenado [corx] [cory];
        desordenado[desordenado.this.detectarBlanco()[0]][desordenado.this.detectarBlanco()[1]] = posicionNueva;
        desordenado[corx][cory] = 0;
    }
    
}
pusle = new Tablero(5,5);
console.log(pusle.generarTablero());
console.log(pusle.desordenaTablero());
