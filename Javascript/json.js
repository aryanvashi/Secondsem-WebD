let person={
    name:"John",
    age:30,
    city:"New York" 
};
let text=" ";
for(let key in person){
    text += key + ": " + person[key] + "\n";
console.log(text);  
}
