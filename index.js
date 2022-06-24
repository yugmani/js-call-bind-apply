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

// How to call a function with no arguments in JS
// ************************************************

const newEntity = () => console.log(obj);

const mountEntity = () => {
  this.entity = newEntity;
  console.log(`Entity ${this.entity} is mounted on ${this}`);
};

mountEntity.call();

// *********************************************
// How to Use the Apply Function in JavaScript
// **********************************************

function Motor(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function addBrand(brand) {
  Motor.apply(this, ['convertible', 'gasoline']); //using array literal

  this.brand = brand;
  console.log(`Motor details = `, this);
}

function addPrice(price) {
  Motor.apply(this, new Array('convertible', 'diesel')); //array object construction

  this.price = price;
  console.log(`Motor details = `, this);
}

const myBrand = new addBrand('Bently');
// Motor details =
// addBrand {type: "convertible", fuelType: "gasoline", brand: "Bently"}
const myMotorPrice = new addPrice('2million');
// Motor details =
// addPrice {type: "convertible", fuelType: "diesel", price: "2million"}

