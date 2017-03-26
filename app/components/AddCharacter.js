import React from 'react';
import AddCharacterStore from '../stores/AddCharacterStore';
import AddCharacterActions from '../actions/AddCharacterActions';

class AddCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddCharacterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddCharacterStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddCharacterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var name = this.state.name.trim();
    var gender = this.state.gender;
    var year = this.state.year;
    var branch = this.state.branch;
    var url = this.state.url;



    if (!name) {
      AddCharacterActions.invalidName();
      this.refs.nameTextField.focus();
    }

    if (!gender) {
      AddCharacterActions.invalidGender();
    }
    
        if (!url) {
      AddCharacterActions.invalidUrl();
    }

    if (name && gender && branch && year && url) {
      AddCharacterActions.addCharacter(name, gender, year, branch, url);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add Character</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.nameValidationState}>
                    <label className='control-label'>Character Name</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                           onChange={AddCharacterActions.updateName} autoFocus/>
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.urlValidationState}>
                    <label className='control-label'>Image URL</label>  <p>(To add image: 1. Open FB profile pic in Browser 2. Click on View Full Size or Open image in new Tab 3. Copy URL)</p>
                    <input type='text' className='form-control' ref='urlTextField' value={this.state.url}
                           onChange={AddCharacterActions.updateUrl} autoFocus/>
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.genderValidationState}>
                    <div className='radio radio-inline'>
                      <input type='radio' name='gender' id='female' value='Female' checked={this.state.gender === 'Female'}
                             onChange={AddCharacterActions.updateGender}/>
                      <label htmlFor='female'>Female</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='gender' id='male' value='Male' checked={this.state.gender === 'Male'}
                             onChange={AddCharacterActions.updateGender}/>
                      <label htmlFor='male'>Male</label>
                    </div>
                  </div>
                  <div className={'form-group ' + this.state.yearValidationState}>
                    <div className='radio radio-inline'>
                      <input type='radio' name='year' id='1st' value='1st' checked={this.state.year === '1st'}
                             onChange={AddCharacterActions.updateYear}/>
                      <label htmlFor='1st'>1st</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='year' id='2nd' value='2nd' checked={this.state.year === '2nd'}
                             onChange={AddCharacterActions.updateYear}/>
                      <label htmlFor='2nd'>2nd</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='year' id='3rd' value='3rd' checked={this.state.year === '3rd'}
                             onChange={AddCharacterActions.updateYear}/>
                      <label htmlFor='3rd'>3rd</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='year' id='4th' value='4th' checked={this.state.year === '4th'}
                             onChange={AddCharacterActions.updateYear}/>
                      <label htmlFor='4th'>4th</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='year' id='Passout' value='Passout' checked={this.state.year === 'Passout'}
                             onChange={AddCharacterActions.updateYear}/>
                      <label htmlFor='Passsout'>Passout</label>
                    </div>
                  </div>
                  <div className={'form-group ' + this.state.branchValidationState}>
                    <div className='radio radio-inline'>
                      <input type='radio' name='branch' id='CS' value='CS' checked={this.state.branch === 'CS'}
                             onChange={AddCharacterActions.updateBranch}/>
                      <label htmlFor='CS'>CS</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='branch' id='EC' value='EC' checked={this.state.branch === 'EC'}
                             onChange={AddCharacterActions.updateBranch}/>
                      <label htmlFor='EC'>EC</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='branch' id='EE' value='EE' checked={this.state.branch === 'EE'}
                             onChange={AddCharacterActions.updateBranch}/>
                      <label htmlFor='EE'>EE</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='branch' id='CE' value='CE' checked={this.state.branch === 'CE'}
                             onChange={AddCharacterActions.updateBranch}/>
                      <label htmlFor='CE'>CE</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='branch' id='EEE' value='EEE' checked={this.state.branch === 'EEE'}
                             onChange={AddCharacterActions.updateBranch}/>
                      <label htmlFor='EEE'>EEE</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='branch' id='IC' value='IC' checked={this.state.branch === 'IC'}
                             onChange={AddCharacterActions.updateBranch}/>
                      <label htmlFor='IC'>IC</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='branch' id='IT' value='IT' checked={this.state.branch === 'IT'}
                             onChange={AddCharacterActions.updateBranch}/>
                      <label htmlFor='IT'>IT</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='branch' id='ME' value='ME' checked={this.state.branch === 'ME'}
                             onChange={AddCharacterActions.updateBranch}/>
                      <label htmlFor='ME'>ME</label>
                    </div>
                  </div>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCharacter;
