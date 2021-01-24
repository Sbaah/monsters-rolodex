import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components//search-box/search-box.component';

// function App() {
// return (
// <div className="App">
// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p> Hello My Name is Sefa.
// <br/>
// Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>
// </header>
// </div>
// );
// }

class App extends Component {
  // constructor allows access to super() which gives access to this.state={}
  // will allow to set to a default
  // when ever you see '{}' in a tag it mean that what ever is in between
  // there is java script
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: [],
      title: [],
    };
    // telling java script what to do for the custom handleChange method
    // .bind
    // this.handleChange = this.handleChange.bind(this);
  }
  //is to put the component on the page
  // fetch from a url
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        //  console.log(res)
        return res.json();
      })
      .then((users) => {
        // console.log(users);
        this.setState({ monsters: users });
      });
  }

  // customs/class method  handleChange method
  // we uses EX 6 arrow function and the unique characteristics about them
  // ()=>{}
  // when it see this in parameters of the functions it will
  // automatically bind what is after 'this' to the parameter in the arrow function..
  handleChange = (e) => {
    this.setState({ searchField: e.target.value, title: e.target.value });
  };

  render() {
    // destructuring will allows us to pull properties of
    // an object and set them to the const that is in side of '{}'
    const { monsters, searchField, title } = this.state;

    // includes() just check the value that was passed to see if it exits in the array.
    const filteredMonsters = monsters.filter((monster) =>
      monster.name
        .toString()
        .toLowerCase()
        .includes(searchField.toString().toLowerCase())
    );

    // map() returns to the us the return of whatever function we pas to it.
    // iterated over ever element
    // this send the value the monster state to the card list
    // this.state.monsters
    // update .....
    //the new code is to help us update dom for search
    // sending user input to the search component

    /*   Going to write a method that does this because there a time where 
       i would need it on diffident values
      handleChange={(e) => {
      this.setState({ searchField: e.target.value });
    }}

     <CardList monsters={filteredMonsters}></CardList>
    */
    return (
      <div className='App'>
        <h1> {title} </h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={monsters}></CardList>
      </div>
    );
  }
}

export default App;
