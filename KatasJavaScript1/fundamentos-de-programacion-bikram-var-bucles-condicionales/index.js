
//1
let variableSinValor ;

//2
let booleano1 = true;
let booleano2 = false;

//3
const PI = 3.14;

//4
const TAU = PI * 2;

//5
var booleanoAnd = (booleano1 && booleano2);

//6
var booleanoNot = booleano2;

//7
var booleanoMix0 = (booleano1 || booleano2) && (booleano1 ||(!booleano1 && !booleano2));

//8
var incrementarDesp = 2;
var resultadoDesp = incrementarDesp++;

//9
var incrementarAntes = 2;
var resultadoAntes = ++incrementarAntes;

//10
for( var contarHasta10_2 = 0; contarHasta10_2 < 10; contarHasta10_2++);


//11
var postI = 0;
var postJ = 0;

for( let i = 0; i <= 10; i++)
{
    postI += postJ++;
}

/* 12.- crea la variable 'sumaPares' con valor 0 a continuación crea un bucle que itere 10 veces (i < 10), si la iteración es par se deberá asumar a sumaPares el número de la iteración actual (i) */

var sumaPares = 0;

for( let i= 0; i<10; i++)
    {
        if(i%2 == 0)
        {
            sumaPares += i;
        }
    }

//13
let variableValorNumerico = 6;

//14
const MiNombre = 'Olatz';

//15
const MiNumeroFav = 6;

//16
var booleanoOr = booleano1 || booleano2;

//17
var booleanoMix1 = (booleano1 && TAU/2 == PI) || ( variableValorNumerico >= MiNumeroFav);

//18
let seisNoEsNueve = (6 != 9);

//1919.- variable 'booleanoMix2' cuyo valor sea la comparación booleana 'variableValorNumerico positivo o menor que -(MiNumeroFav * TAU)

let booleanoMix2 = variableValorNumerico < (MiNumeroFav * TAU);


//20
var valorSuma = MiNumeroFav + variableValorNumerico;

//21
var valorResta = MiNumeroFav - variableValorNumerico;

//22
var valorMultiplicacion = MiNumeroFav * variableValorNumerico;

//23
var valorDivision = MiNumeroFav / 3;

//24
 let contarHasta10 = 0;
 while(contarHasta10 < 10)
 {
    contarHasta10++;
    
 };

//25

let preI = 0;
let preJ = 0;

while (preJ <= 10)
    {
        preI += ++preJ;

    };

//26
let sumaImpares = 0;
for( let i = 0; i < 10; i++)
{   
    if(i % 2 != 0)
    {
        sumaImpares += i;
    }
};