import alt from '../alt';

class AddCharacterActions {
  constructor() {
    this.generateActions(
      'addCharacterSuccess',
      'addCharacterFail',
      'updateName',
      'updateGender',
      'updateYear',
      'updateBranch',
      'updateUrl',
      'invalidUrl',
      'invalidName',
      'invalidGender'
    );
  }

  addCharacter(name, gender, year, branch, url) {
    $.ajax({
      type: 'POST',
      url: '/api/characters',
      data: { name: name, gender: gender, year: year, branch: branch, url }
    })
      .done((data) => {
        this.actions.addCharacterSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addCharacterFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddCharacterActions);
