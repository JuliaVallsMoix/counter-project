// Tu código aquí.
// Variable de estado: un number para almacenar el valor del contador actual
let counter = 0;

// Seleccionar el botón ADD COUNT y añadir un listener para el evento 'click'. Cada vez que el usuario haga click en el botón, incrementamos en 1 la variable de estado. 
// Luego, seleccionar el nodo donde esta la información textual y sobrescribirlo con el valro de la variable

// Cuando usamos mucho el mismo nodo más de una vez en la función, guárdalo en una variable para simplificar el código:

const counterElemement = document.querySelector('#counter');

function updateCounter(value) {
    counterElemement.innerHTML = value;
    if (value > 0) {
        counterElemement.style.color = 'green';
    } else if (value < 0) {
        counterElemement.style.color = 'red';
    } else {
        counterElemement.style.color = '#333333';
    };
};

document.querySelector('.nextBtn').addEventListener('click', () => {
    counter++;
    updateCounter(counter); 
});

document.querySelector('.prevBtn').addEventListener('click', () => {
    counter--;
    updateCounter(counter); 
});

