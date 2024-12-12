function creaCelle (){

    for(let i=1; i<=76; i++){
        let celleTombola = document.createElement('div')
        celleTombola.className = 'celle'
        celleTombola.innerText = i
        contenitore.appendChild(celleTombola)
    }
}

let contenitore = document.querySelector('#caselle')

creaCelle ()

let bottoneEstrai = document.querySelector('#bottone')

function buttonRandom (){
    let numero = Math.floor(Math.random()*76)+1;
    console.log(numero)
    let celleTombola = document.querySelectorAll('.celle')
    celleTombola[numero - 1].classList.add('estratto')
    let numeroCasuale;
    do {
        numeroCasuale = Math.floor(Math.random() * 76) + 1
    } while (numbers.includes(numeroCasuale))
    numbers.push(numeroCasuale)
}

let numbers = []