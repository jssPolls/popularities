import React from 'react';
import CharacterStore from '../stores/CharacterStore';
import CharacterActions from '../actions/CharacterActions'

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = CharacterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    CharacterStore.listen(this.onChange);
    CharacterActions.getCharacter(this.props.params.id);

    $('.magnific-popup').magnificPopup({
      type: 'image',
      mainClass: 'mfp-zoom-in',
      closeOnContentClick: true,
      midClick: true,
      zoom: {
        enabled: true,
        duration: 300
      }
    });
  }

  componentWillUnmount() {
    CharacterStore.unlisten(this.onChange);
    $(document.body).removeClass();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      CharacterActions.getCharacter(this.props.params.id);
    }
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
      const bgImgUrl = "https://raw.githubusercontent.com/kshitj9/votes/master/public/img/amarr_bg.jpg"
        const background = {
    backgroundImage: 'url(' + bgImgUrl + ')'
  }

    return (
          <div className='container' style={background}>
        <div className='profile-stats clearfix'>
          <a ref='magnificPopup' className='magnific-popup' href={this.state.url}>
            <img className='media-object' src={this.state.url} style = {{width:200, height: 200}}/>
          </a>
        </div>
        <div className='profile-info clearfix'>
          <h2><strong>{this.state.name}</strong></h2>
          <h4 className='lead'>Year: <strong>{this.state.year}</strong></h4>
          <h4 className='lead'>Branch: <strong>{this.state.branch}</strong></h4>
          <h4 className='lead'>Gender: <strong>{this.state.gender}</strong></h4>
          <h4 className='lead'>Image URL: <strong>{this.state.url}</strong></h4>

      
          <button className='btn btn-transparent'
                  onClick={CharacterActions.report.bind(this, this.state.characterId)}
                  disabled={this.state.isReported}>
            {this.state.isReported ? 'Reported' : 'Report Character'}
          </button>
        </div>
        <div className='profile-stats clearfix'>
          <ul>
            <li><span className='stats-number'>{this.state.winLossRatio}</span>Winning Percentage</li>
            <li><span className='stats-number'>{this.state.wins}</span> Wins</li>
            <li><span className='stats-number'>{this.state.losses}</span> Losses</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Character;
