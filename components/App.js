const React = require('react');
const Pets = require('../data/pets.js');
const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.onAdoptPet = this.onAdoptPet.bind(this)
    this.onChangeType = this.onChangeType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
    fetch('/api/pets').then((response)=>{

      return response.json()
    }).then((response)=>{
      this.setState({pets:response})
    })
  }

  onAdoptPet(id) {
    this.setState(Object.assign({}, this.state, {adoptedPets:[...this.state.adoptedPets, id]}))
  }

  onChangeType(value) {

    this.setState(Object.assign({}, this.state, {filters:{type: value}}))
  }

  onFindPetsClick() {
    let url
    
    if(this.state.filters.type === 'all'){
      url = '/api/pets'
    }
    else {
      url = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(url).then((response)=>{

      return response.json()
    }).then((response)=>{

      this.setState({pets:response})
    })
  }

  render() {

    return (

      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser filter={this.state.filters.type} onAdoptPet={this.onAdoptPet} pets={this.state.pets} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
