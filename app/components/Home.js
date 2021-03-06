import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';
const bgImgUrl = "https://raw.githubusercontent.com/jssPolls/popularities/master/home.jpg"

let imgUrl = 'images/berlin.jpg'
let styles = {
root: {

    background: 'url('+ bgImgUrl + ') noRepeat center center fixed',
    backgroundSize: 'cover',
}
};
var sectionStyle = {
  width: "100%",
  height: "130%",
  backgroundImage: 'url(' + bgImgUrl + ') noRepeat center center fixed',
  backgroundSize: 'cover'
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
    HomeActions.getTwoCharacters();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(character) {
    var winner = character.characterId;
    var loser = first(without(this.state.characters, findWhere(this.state.characters, { characterId: winner }))).characterId;
    HomeActions.vote(winner, loser);
  }

  render() {

    
    var characterNodes = this.state.characters.map((character, index) => {
      return (
        <div key={character.characterId} className={index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5'}>
          <div className='thumbnail fadeInUp animated'>
            <img onClick={this.handleClick.bind(this, character)} src={character.url}/>
            <div className='caption text-center'>
              <ul className='list-inline'>
                <li><strong>Year:</strong> {character.year}</li>
                <li><strong>Branch:</strong> {character.branch}</li>
              </ul>
              <h4>
                <Link to={'/characters/' + character.characterId}><strong>{character.name}</strong></Link>
              </h4>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='container' style={ sectionStyle }>
        <h3 className='text-center'>Who do you think should be Mr. or Ms. Zealicon 2017?</h3>
        <div className='row'>
          {characterNodes}
        </div>
      </div>
    );
  }
}

export default Home;
