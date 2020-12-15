import React from 'react'

function Form(props) {
  const { name, email, role } = props;

  return (
    <div>
      <form onSubmit="">
        <label>Name
          <input 
          type="text"
          name="name"
          // onChange={onChange}
          value={name}
          />
        </label>
        <label>Email
          <input 
          type="email"
          name="email"
          // onChange={onChange}
          value={email}
          />
        </label>
        <label>
          <select name="role">
            <option value="">---Select One---</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-end">Back-End</option>
            <option value="Fullstack">Fullstack</option>
          </select>
        </label>

      </form>
    </div>
  )
}

export default Form
