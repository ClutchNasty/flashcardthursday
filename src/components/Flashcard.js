import React from 'react';
import Fcard from "./Fcard"
import { Card, } from 'semantic-ui-react';

const Flashcard = (props) => (
    <Card>
      { props.Fcards.map( flashcard => (
      <Fcard
      key={flashcard.id} 
      {...flashcard}
      />
      ))}
    
    </Card>
);




export default Flashcard