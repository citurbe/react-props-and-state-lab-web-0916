const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick() {
    
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {

    let genderSymbol
    if (this.props.pet.gender === "male"){
       genderSymbol = '♂'
    }
    else {
       genderSymbol = '♀'
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name}: {genderSymbol}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { !this.props.isAdopted && <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>}
          {this.props.isAdopted && <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
