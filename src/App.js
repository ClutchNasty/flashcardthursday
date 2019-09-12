import React from 'react';
import {Container} from 'semantic-ui-react';
import './App.css';
import { Route, } from 'react-router-dom';
import Flashcards from './components/Flashcards';

const App=() =>  (
 
  <Container>
    <Route exact path="/flashcards" component={ Flashcards }/>

  </Container>
)



export default App;
