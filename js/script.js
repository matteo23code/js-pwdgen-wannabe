var nome = prompt('Qualè il tuo nome? ');
var cognome = prompt('Qualè il tuo cognome? ');
var colore = prompt('Quelè il tuo colore preferito? ')
var anno = new Date('2020-12-11').getFullYear(2020)

var result = nome + cognome + colore + anno;

document.getElementById('risultato')
.innerHTML= result;
