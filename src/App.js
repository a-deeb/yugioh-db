import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {

constructor(){
  super();

  this.state ={ 

    monsters: [],
    searchfield: ''

  };

this.handleChange = this.handleChange.bind(this);

}

componentDidMount(){
fetch('https://db.ygoprodeck.com/api/v6/cardinfo.php')
.then(response => response.json())

.then(cards => this.setState({monsters: cards}))

}

handleChange(e){

   this.setState({searchfield: e.target.value})

}

  render() {

    const {monsters, searchfield} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()) )
  return (
    <div className="App">
    <h1>Yugioh Duel Monsters</h1>
    <SearchBox 
    placeholder='Search for a Yugi-oh Card'
    handleChange={this.handleChange} />
    <CardList monsters={filteredMonsters}/>

    </div>
  );
}
}
export default App;
