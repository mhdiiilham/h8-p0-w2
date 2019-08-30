console.log('NOMOR 1')
// Looping while
var number = 0
console.log('LOOPING PERTAMA')
while (number <= 20){
    number = number + 2
    console.log(number + ' - I love coding')
}
var number = 22
console.log('LOOPING KEDUA')
while (number > 0){
    number = number - 2
    console.log(number + ' - I will become fullstack developer')
}


console.log('NOMOR 2')
// Loopng for
console.log('LOOPING PERTAMA')
for (number = 0; number <= 20; number++) {
    console.log(number + ' - I love coding')
}
console.log('LOOPING KEDUA')
for (number = 20; number > 0; number--){
    console.log(number + ' - I will become fullstack developer')
}


console.log('NOMOR 3')
// Angka Ganjil Genap
for (angka = 1; angka <= 100; angka++){
    if (angka % 2 === 0){
        console.log(angka + ' Genap')
    }
    if (angka & 2 !== 0){
        console.log(angka + ' Ganjil')
    }
}
for (counter = 1; counter <= 100; counter++){
    if (counter % 2 === 0) {
        console.log(counter + ' bilangan genap')
    } else {
        console.log(counter + ' bilangan ganjil')
    }
}

var aqua = 1
while (aqua <= 100){
    aqua = aqua + 2
    if (aqua % 3 === 0){
        console.log(aqua + ' Kelipatan tiga')
    }
}
var pertambahan5 = 1
while (pertambahan5 <= 100){
    pertambahan5 = pertambahan5 + 5
    if (pertambahan5 % 6 === 0){
        console.log(pertambahan5 + ' kelipatan 6')
    }
}
var pertambahan9 = 1
while (pertambahan9 <= 100){
    pertambahan9 = pertambahan9 + 9
    if (pertambahan9 % 10 === 0){
        console.log(pertambahan9 + ' Kelipatan 10')
    }
}