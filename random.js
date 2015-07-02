// Math.random() devuelve número aleatorio entre 0 y 100.
var numero = Math.random();
numero*=100;
var str =' MAYOR que 50';

if (numero <= 50){
  str = ' MENOR que 50';
}

console.log('\n' + numero.toFixed(0) + str + '\n');
