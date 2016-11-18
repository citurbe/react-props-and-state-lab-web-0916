const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {

    let petProps = this.props
    
    let pets = this.props.pets.map (pet => {

      let adopted = petProps.adoptedPets.includes(pet.id)

      return <Pet pet={pet} onAdoptPet={petProps.onAdoptPet} isAdopted={adopted}/>

    })

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
