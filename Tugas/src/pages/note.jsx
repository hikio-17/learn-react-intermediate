import React from "react";
import parser from 'html-react-parser';

class Home extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         body: ''
      }
      this.onInputHandler = this.onInputHandler.bind(this);
   }

   onInputHandler(event) {
      this.setState(() => {
         return {
            body: event.target.innerHTML
         }
      });
   }

   render() {
      return (
         <>
            <h4>Home</h4>
            <div 
               className="add-new-page__input__body"
               data-placeholder="Sebenarnya saya adalah ..."
               contentEditable='true'
               onInput={this.onInputHandler}>Edit me</div>
            <br /><br />
            <p>{this.state.body}</p>
         </>
      )
   }
}
   

export default Home