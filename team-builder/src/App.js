import './App.css';
import React, { useState } from 'react';
import Form from './components/Form'


const initialFormValues = {
  name:"",
  email:"",
  role:"",
}

const dummyFriends = [
  {
    id:123,
    name:'Nate',
    email: 'Nate@nate.com',
    role: 'Fullstack'
  },
  {
    id:456,
    name:'Joe',
    email: 'Joe@Joe.com',
    role: 'Back-End'
  },
  {
    id:789,
    name:'Ana',
    email: 'Ana@Ana.com',
    role: 'Front-end'
  },
];

function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ friends, setFriends ] = useState(dummyFriends)
  // helper functions for submit and onchange

  const onChange = event => {
    const { name, value } = event.target;

  }

  function onSubmit (inputName, inputValue) {

  }

  

  return (
    <div className="App">
      Simple Team Building Form!
      <Form
      values={formValues}
      onChange={onChange}
      />
      {
        friends.map(friend => {
          return (
            <div key={friend.id}>
              <h2>{friend.name}</h2>
              <h3>{friend.email}</h3>
              <h3>{friend.role}</h3>
              <hr/>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
