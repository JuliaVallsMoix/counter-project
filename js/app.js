// Tu código aquí.
// Variable de estado: un number para almacenar el valor del contador actual
let counter = 0;

// Seleccionar el botón ADD COUNT y añadir un listener para el evento 'click'. Cada vez que el usuario haga click en el botón, incrementamos en 1 la variable de estado. 
// Luego, seleccionar el nodo donde esta la información textual y sobrescribirlo con el valro de la variable

document.querySelector('.nextBtn').addEventListener('click', () => {
    counter++;
    document.querySelector('#counter').innerHTML = counter; 
    if (counter > 0) {
        document.querySelector('#counter').style.color = 'green';
    } else if (counter < 0) {
        document.querySelector('#counter').style.color = 'red';
    } else {
        document.querySelector('#counter').style.color = 'grey';
    };
    
    
});

document.querySelector('.prevBtn').addEventListener('click', () => {
    counter--;
    document.querySelector('#counter').innerHTML = counter;
    if (counter < 0) {
        document.querySelector('#counter').style.color = 'red';
    } else if (counter > 0) {
        document.querySelector('#counter').style.color = 'green';
    } else {
        document.querySelector('#counter').style.color = 'grey';
    };
});