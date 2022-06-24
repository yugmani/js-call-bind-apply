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

// using arguments keyword
// ********************************

function addUp() {
  // Using arguments to capture the arbitrary number of inputs
  const args = Array.from(arguments);
  this.x = args.reduce((prev, curr) => prev + curr, 0);
  console.log('this.x = ', this.x);
}

function driverFunc() {
  const obj = {
    inps: [1, 2, 3, 4, 5, 6],
  };

  addUp.apply(obj, obj.inps);
}

driverFunc();
// this.x = 21

// How to Use the Bind Function in JavaScript
// ***********************************************
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };

    //bind this function
    this.handleCode = this.handleCode.bind(this);
  }

  handleCode() {
    console.log('Handle code this = ', this.state);
  }

  render() {
    return <button onClick={this.handleCode}>Click Me</button>;
  }
}
