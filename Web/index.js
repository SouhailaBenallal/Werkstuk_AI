 "use strict";
console.log('Hello TensorFlow');

async function getData() {
   const carsDataResponse = await fetch('/Python/.keras_model/model.json');  
   const carsData = await carsDataResponse.json();  
   console.log(carsData,'Model');
 }
getData();
