let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

//your code here
let comienzo = mySampleArray.length -1;
let detenerse = 0;
let incremento = 1;
for(let i = comienzo; i >= detenerse; i= i - incremento;){
    console.log(mySampleArray[i]);
}