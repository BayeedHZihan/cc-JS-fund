//FUNCTION : 
function add (x,y){

}
const add = function (x,y){

}
const add = (x,y) => {

}


//ARRAY :
const hobbies = ['spoon', true, 2];
push, pop, length
//lookup -> array js mdn for reference, has many array methods


//ITERATORS:
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

//map returns a new array
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers);

//filter returns a new array, those that returns true on the condition
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});
console.log(onlyNumbers);


//Objects
const alienShip = {
    //ES6 function inside object literal
    invade () { 
      console.log('Hello!')
    }
};
alienShip.invade();

//Looping through objects inside object
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
// Write your code below
for (let member in spaceship.crew){
  console.log(`${member}: ${spaceship.crew[member].name}`)
}


//Destructuring
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
// Here
const {functionality} = robot; // Same as-> const functionality = robot.functionality; 
functionality.beep();



////// REACT
//JSX className
const myDiv = (
  <div className="big">
    I AM A BIG DIV
  </div>
)
ReactDOM.render(myDiv, document.getElementById('app'))

//self closing tags 
//single tag elements should be  closed with '/'
<img src="images/jenkins.png" />

//js inside jsx 
ReactDOM.render(
  <h1>2 + 3</h1>, document.getElementById("app") //prints 2 + 3
)

ReactDOM.render(
  <h1>{2 + 3}</h1>, document.getElementById("app") // prints 5
) // here the curly braces is used to say its js inside jsx

//Using js from outside the jsx
const theBestString = 'tralalalala i am da best';
ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));


//Component
class MyComponentClass extends React.Component {
  render() { //class always has a render method which returns jsx
    return <h1>Hello world</h1>;
  }
}
<MyComponentClass/> // instance of the component

//When we try to access sth from  another function  in render () in a component
-> we use "this"

//running passed function/event handler as prop
export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}


//State
class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}

//update state
this.setState({ hungry: true });


// css styling
const styles = {
  background : 'lightblue', 
  color : 'darkred'
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);


////////Child component update parent's state
//we do this by -
// 1. create method to update state inside parent component
// 2. pass method to child as prop
// 3. use this in child as this.props.method-name


///Functional Component
// When a component class has nothing but a render() method,
// we can rewrite it as a function
// A component class written in the usual way:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// The same component class, written as a stateless functional component:
export const MyComponentClass = () => {
  return <h1>Hello world</h1>;
}

// Works the same either way:
ReactDOM.render(
	<MyComponentClass />,
	document.getElementById('app')
);
/////////////


///Proptypes
// When a class expects props we create proptypes outside the class
//Here Runner is the class and 6 keys are the props that the class expects
Runner.propTypes = {
  message:   React.PropTypes.string.isRequired,
  style:     React.PropTypes.object.isRequired,
  isMetric:  React.PropTypes.bool.isRequired,
  miles:     React.PropTypes.number.isRequired,
  milesToKM: React.PropTypes.func.isRequired,
  races:     React.PropTypes.array.isRequired
};


/// FORM
import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: ""
    }
    this.handleUserInput = this.handleUserInput.bind(this)
  }
  handleUserInput(e){
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput}/>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);


///Lifecycle methods
// 1. mount 2. update 3. unmount

//first: mount - componentWillMount() -> render() -> componentDidMount()
//when a component gets rendered for the FIRST time "^mount" lifecycle methods gets called, from the second time they dont get called 
//inside component class we define these methods   

// The first time that a component instance renders, it does not update. A component updates every time that it renders, starting with the second render.
// There are five updating lifecycle methods:
//1. componentWillReceiveProps
//2. shouldComponentUpdate
//3. componentWillUpdate
//4. render
//5. componentDidUpdate