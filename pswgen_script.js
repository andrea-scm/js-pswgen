var name,surname,fav_color,rnd_num;
name = prompt('Inserisci il tuo nome');
surname = prompt('Inserisci il tuo cognome');
fav_color = prompt('Inserisci il tuo colore preferito');
console.log(name);
console.log(surname);
console.log(fav_color);
rnd_num = Math.floor(((Math.random() * 98) + 1)); // *98 + 1 cosi prende i numeri random da 1 a 99
console.log(rnd_num);
document.getElementById('rnd_psw').innerHTML = name + surname + fav_color + rnd_num;
//document.writeln(name + surname + fav_color + rnd_num);
