/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("          ~ . ~ . ~ Esercizio 1 ~ . ~ . ~          ");

function stringa (stringa1, stringa2){
  let porzStringa1 = stringa1.slice(0,2);
  let porzStringa2 = stringa2.slice(-3);
  let stringaCompleta = (porzStringa1 + porzStringa2).toUpperCase()
  console.log(stringaCompleta)
}

stringa("carlo", "terzo")

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("          ~ . ~ . ~ Esercizio 2 ~ . ~ . ~          ");

function arrRand() {
  let randArray = [];
  for (let i = 0; i < 10; i++) {
      let valRand = Math.floor(Math.random() * 101);
      randArray.push(valRand);
  }
  return randArray;
}

console.log(arrRand());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("          ~ . ~ . ~ Esercizio 3 ~ . ~ . ~          ");

function numPari (array){
  return array.filter (num => num %2 === 0)
}

let num = [24,75,2,5,36]
let pariNum = numPari(num)
console.log(pariNum)

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("          ~ . ~ . ~ Esercizio 4 ~ . ~ . ~          ");

/*function arrSomma (numeri) {
  let somma = 0;

  numeri.forEach(num => {
      somma += num;
  });
  return somma;
}

let num1 = [43, 86, 12, 7, 25];
let totale = arrSomma(num1);
console.log(totale);*/

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("          ~ . ~ . ~ Esercizio 5 ~ . ~ . ~          ");

function arrSomma(numeri) {
  return numeri.reduce((somma, num) => somma + num, 0);
}

let num1 = [32, 86, 12, 7, 25];
let totale = arrSomma(num1);
console.log(totale);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("          ~ . ~ . ~ Esercizio 6 ~ . ~ . ~          ");

function arraySommato(array, n) {
  return array.map (num => num + n)
}

let num2 = [34,65,87,24]
let risulArray = arraySommato(num2, 3)
console.log(risulArray)

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("          ~ . ~ . ~ Esercizio 7 ~ . ~ . ~          ");

function arrNumLett (arrStr){
  return arrStr.map(str => str.length)
}

let stringhe = ["Hello","World"]
let numLett = arrNumLett(stringhe)
console.log(numLett)

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("          ~ . ~ . ~ Esercizio 8 ~ . ~ . ~          ");

function numDisp (numeri) {
  let numeriDispari  = []
  for (let i = 1; i <= 99; i += 2) {
    numeriDispari.push(i)
  } return numeriDispari
}

let numeriDispari = numDisp()
console.log (numeriDispari)

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("          ~ . ~ . ~ Esercizio 9 ~ . ~ . ~          ");

function filmVecchio(movies) {
  let filmPiuVecchio = movies[0];

  movies.forEach(movie => {
      if (parseInt(movie.Year) < parseInt(filmPiuVecchio.Year)) {
          filmPiuVecchio = movie;
      }
  });

  return filmPiuVecchio;
}

let filmVec = filmVecchio(movies);
console.log(filmVec);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("          ~ . ~ . ~ Esercizio 10 ~ . ~ . ~          ");

function numMovie (movies) {
  return movies.length
}

let movieNumber = numMovie (movies)
console.log(movieNumber)

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("          ~ . ~ . ~ Esercizio 11 ~ . ~ . ~          ");

function nomiFilm (movies){
  return movies.map(movies => movies.Title)
}

let titoliFilm = nomiFilm (movies)
console.log (titoliFilm)

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("          ~ . ~ . ~ Esercizio 12 ~ . ~ . ~          ");

function filmMillenioCorrente (movies) {
  return movies.filter(movies => movies.Year >= 2000)
}

let filmMillennioAttuale = filmMillenioCorrente (movies)
console.log(filmMillennioAttuale)

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("          ~ . ~ . ~ Esercizio 13 ~ . ~ . ~          ");

function sommaAnniFilm (movies){
  return movies.reduce((somma, movies) => somma + parseInt(movies.Year), 0)
}

let totAnni = sommaAnniFilm (movies)
console.log(totAnni)

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("          ~ . ~ . ~ Esercizio 14 ~ . ~ . ~          ");

function trovaID (movies, ID) {
  return movies.find(movies => movies.imdbID === ID)
}

let imdb = 'tt0167260'
let filmCorrispondente = trovaID (movies, imdb)
console.log(filmCorrispondente)

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

console.log("          ~ . ~ . ~ Esercizio 15 ~ . ~ . ~          ");

function trovaAnnoFilm(movies, anno) {
  return movies.findIndex(movies => movies.Year === anno);
}

let anno = '2003';
let indiceFilm = trovaAnnoFilm(movies, anno);
console.log(indiceFilm);