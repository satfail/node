//function sumar(a, b) {
//return a + b;
//}


let sumar = (a, b) => {
        return a + b;
    }
    //Si el retorno es una linea

let sumar2 = (a, b) => a + b;


console.log(sumar(8, 2));


console.log(sumar2(8, 4));


let saludar = () => 'Hola Mundo';

console.log(saludar());

let saludar2 = nombre => `Hola ${nombre}`;

console.log(saludar2('Miguel'));


//En la funcion flecha el this apunta al valor que tiene
//fuera de la funcion de flecha
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} tiene un poder ${this.poder}`
    }
}

console.log(deadpool.getNombre());