import React from 'react';
import {Link} from 'react-router';
import maleStore from '../stores/maleStore'
import maleActions from '../actions/maleActions';
import {first, without, findWhere} from 'underscore';

class male extends React.Component {
  constructor(props) {
    super(props);
    this.state = maleStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    maleStore.listen(this.onChange);
    maleActions.getTwoCharacters();
  }

  componentWillUnmount() {
    maleStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(character) {
    var winner = character.characterId;
    var loser = first(without(this.state.characters, findWhere(this.state.characters, { characterId: winner }))).characterId;
    maleActions.vote(winner, loser);
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
      <div className='container'>
        <h3 className='text-center'>Who do you think should get maximum number of proposes today?</h3>
        <div className='row'>
          {characterNodes}
        </div>
      </div>
    );
  }
}

export default male;

