import React, { Component } from 'react'
import {Container, Card} from 'semantic-ui-react'
import Flashcard from './Flashcard'

class Flashcards extends Component {
  state = {
     flashcards: [
        { id:1, front: "question1", back: "answer1",},
        { id:2, front: "question2", back: "answer2",},
        { id:3, front: "question3", back: "answer3",},
        { id:4, front: "question4", back: "answer4",},
     ]
    }
     
    
  
  render() {
    return (
     <Container>
    <Flashcard/>
     </Container>
      )
    };
  
}
export default Flashcards;

