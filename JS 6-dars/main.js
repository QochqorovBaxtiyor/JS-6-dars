/*


localStorage.setItem('ism','Sunnatbek');
localStorage.setItem('familya','Rsvshanov');
localStorage.setItem('yoshi','16 yoshda');

localStorage['ism'] = "Baxtiyor";
localStorage['familya'] = "Kuchkarov";
localStorage['yoshi'] = "18 yoshda";

localStorage.removeItem('ism');
localStorage.removeItem('familya');
localStorage.removeItem('yoshi');

let uningIsmi = localStorage.getItem('ism');
let uningFamilyasi = localStorage.getItem('familya')
let uningYoshi = localStorage.getItem('yoshi')
console.log(uningIsmi,uningFamilyasi,uningYoshi);
*/


/*
let sorov = new XMLHttpRequest();

sorov.open('get','http://getty.uz/serverdan/malumot/olish');
sorov.send();

sorov.onload = function (){
    console.log(sorov.responseText);
}
*/


/*
let jsFile = {'ism':'Guli','yoshi':'16 yoshda'};
let jsonFile = {"ism":"Komila","yoshi":"38 yoshda"};

console.log(JSON.stringify(jsFile));
console.log(JSON.parse(jsFile));
*/


let sorov = new XMLHttpRequest();
sorov.open('get','jsonFile.json');
sorov.send();
sorov.onload = function (){
    console.log(sorov.responseText)
}
let sorov1 = new XMLHttpRequest();
sorov1.open('post','jsFile.js');
sorov1.send();
sorov1.onload = function (){
    console.log(sorov1.responseText)
}



