let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} tiene un poder ${this.poder}`
    }
}

console.log(deadpool.getNombre());

//let nomre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);