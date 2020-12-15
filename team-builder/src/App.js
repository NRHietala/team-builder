import './App.css';
import React, { useState } from 'react';
import Form from './components/Form'
function App() {

  const initialFormValues = {
    name:"",
    email:"",
    role:"",
  }

  const [ formValues, setFormValues ] = useState(initialFormValues);

  // helper functions for submit and onchange

  

  return (
    <div className="App">
      App working
      <Form
      values={formValues}
      // add helpers
      />
    </div>
  );
}

export default App;
