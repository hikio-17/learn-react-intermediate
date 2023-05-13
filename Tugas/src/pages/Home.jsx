import React from 'react';
import { getAllNotes } from '../utils/local-data';
import CardList from '../components/CardList';

class Home extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         notes: getAllNotes()
      }
   }

   render() {
      return (
         <main>
            <CardList notes={this.state.notes}/>
         </main>
      )
   }
}

export default Home