import alt from '../alt';
import AddCharacterActions from '../actions/AddCharacterActions';

class AddCharacterStore {
  constructor() {
    this.bindActions(AddCharacterActions);
    this.name = '';
    this.gender = '';
    this.year = '';
    this.branch = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.genderValidationState = '';
    this.yearValidationState = '';
    this.branchValidationState = '';
    this.urlValidationState = '';
  }

  onAddCharacterSuccess(successMessage) {
    this.nameValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddCharacterFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateName(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateGender(event) {
    this.gender = event.target.value;
    this.genderValidationState = '';
  }
  
  onUpdateYear(event) {
    this.year = event.target.value;
    this.yearValidationState = '';
  }
  
  onUpdateBranch(event) {
    this.branch = event.target.value;
    this.branchValidationState = '';
  }
  
  onUpdateUrl(event) {
    this.url = event.target.value;
    this.urlValidationState = '';
  }

  onInvalidName() {
    this.nameValidationState = 'has-error';
    this.helpBlock = 'Please enter a character name.';
  }

  onInvalidGender() {
    this.genderValidationState = 'has-error';
  }
  
  onInvalidUrl() {
    this.urlValidationState= 'has-error';
    this.helpBlock = 'Please enter an image url';
  }
}

export default alt.createStore(AddCharacterStore);
