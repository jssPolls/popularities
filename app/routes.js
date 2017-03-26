import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Stats from './components/Stats';
import male from './components/male';
import female from './components/female';
import Character from './components/Character';
import CharacterList from './components/CharacterList';
import AddCharacter from './components/AddCharacter';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/stats' component={Stats} />
      <Route path='/males' component={male} />
    <Route path='/females' component={female} />
    <Route path='/characters/:id' component={Character} />
    <Route path='/add' component={AddCharacter} />
    <Route path=':category' component={CharacterList}>
      <Route path=':race' component={CharacterList}>
        <Route path=':bloodline' component={CharacterList} />
      </Route>
    </Route>
  </Route>
);
