//taske 1
function sayHello(name){
    console.log('Hello,'+(name)+'!');
}
sayHello('Alice');
sayHello('Bob');


//taske2
let square= function(number){
   let reselt=number*number;
   return reselt;
}
console.log(square(2));
console.log(square(5));


//taske 3
let multiply =(num,num2)=>{
   let product=num*num2;
   return product;
}
console.log( multiply(2,3));
console.log( multiply(4,5));

// taske 4
let car={
    make:'Toyota',
    model:'Camry',
    year:2020,
    getcarinfo: function (){
        return `${this.make} ${this.model} (${this.year})`;
    }
}
console.log(car.make);
console.log(car.getcarinfo());


//taske 5
let colorss=['Red','Yellow','Blue','Green'];
 function printColors(array){
   array.forEach( color=>{
      console.log(color)
   }); 
 }
 printColors(colorss);
 //مهم??????????????????????


 //taske 6
 function getStringLength (string){
    return string.length;
 }
 console.log(getStringLength('Hello'));  
 console.log(getStringLength('JavaScript')); 
 
 
 //taske 7
 function toUpperCase(str){
    return str.toUpperCase();
 }
 console.log(toUpperCase('hello'));
 console.log(toUpperCase('world'));


 
 //taske 8
function splitString(string ,delimiter ){
return string.split(delimiter);
 } 
 console.log(splitString('Hello,World',','));
 console.log(splitString('JavaScript is fun',' '));
 //مهم??????????????????????????????????????????????????????

