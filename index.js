// Import stylesheets
import './style.css';

// How to call a function with different contexts in JS
// *******************************************************

function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand) {
  Car.call(this, 'convertible', 'gasoline');
  this.brand = brand;
  console.log(`Car details = `, this);
}

function definePrice(price) {
  Car.call(this, 'convertible', 'diesel');
  this.price = price;
  console.log(`Car details = `, this);
}

const newBrand = new setBrand('Tesla');
const newCarPrice = new definePrice('1million');

