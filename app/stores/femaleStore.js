import alt from '../alt';
import femaleActions from '../actions/femaleActions';

class femaleStore {
  constructor() {
    this.bindActions(femaleActions);
    this.characters = [];
  }

  onGetTwoCharactersSuccess(data) {
    this.characters = data;
  }

  onGetTwoCharactersFail(errorMessage) {
    toastr.error(errorMessage);
  }

  onVoteFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(femaleStore);
