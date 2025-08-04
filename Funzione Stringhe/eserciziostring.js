/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(numero1, numero2) {
  if (numero1 === numero2) {
    return (numero1 + numero2) * 3;
  } else {
    return numero1 + numero2;
  }
}
console.log(crazySum(3, 3));
console.log(crazySum(2, 3));
console.log(crazySum(4, 4));
console.log(crazySum(10, 10));
console.log(crazySum(100, 100));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(number) {
  if ((number >= 20 && number <= 100) || number === 400) {
    return true;
  }
  return false;
}

console.log(boundary(50));
console.log(boundary(150));
console.log(boundary(400));
console.log(boundary(10));
console.log(boundary(100));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
function reverseString(str) {
  return str.split("").reverse().join("");
}
let myString = "Epicode";
let reversedString = reverseString(myString);
console.log(reversedString);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(stringaa) {
  if (!stringaa) {
    return "";
  }

  const words = stringaa.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}
const miaStringa = "ciao sono un epicoder";
const myFirstupperString = miaStringa;
console.log(upperFirst(myFirstupperString));
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
function giveMeRandom(n) {
  const randomNumbers = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

const myRandomArray = giveMeRandom(5);
console.log(myRandomArray);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const base = 25;
const altezza = 64;

function area(l1, l2) {
  return l1 * l2;
}
const areaRettangolo = area(base, altezza);
console.log(areaRettangolo);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(n) {
  const differenza = Math.abs(n - 19);

  if (differenza > 19) {
    return differenza * 3;
  } else {
    return differenza;
  }
}

console.log(crazyDiff(10));
console.log(crazyDiff(40));
console.log(crazyDiff(50));
console.log(crazyDiff(60));
console.log(crazyDiff(80));
console.log(crazyDiff(90));
console.log(crazyDiff(100));
console.log(crazyDiff(-20));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(s) {
  if (s.startsWith("code")) {
    return s;
  } else {
    return "code" + s;
  }
}
console.log(codify("word"));
console.log(codify("code"));
console.log(codify("code"));
console.log(codify("codesad"));
/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(number) {
    if (number % 3 === 0 || number % 7 === 0) {
        return true;
    } else {
        return false;
    }
}
     
console.log(check3and7(41));
console.log(check3and7(10));
console.log(check3and7(52));
console.log(check3and7(446));
console.log(check3and7(1));
console.log(check3and7(21));
/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(stringa1) {
    if (stringa1.length < 2) {
        return "";
    } 
    return stringa1.slice(1, -1);
}
console.log(cutString("javascript"));
console.log(cutString("hello"));
console.log(cutString("carlo"));
console.log(cutString("Francesco"));
console.log(cutString("revolut"));
console.log(cutString("lol"));
console.log(cutString("ab"));
