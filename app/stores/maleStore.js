import alt from '../alt';
import maleActions from '../actions/maleActions';

class maleStore {
  constructor() {
    this.bindActions(maleActions);
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

export default alt.createStore(maleStore);
