import React from 'react'

function Form(props) {
  const { values, onChange, onSubmit } = props;

  return (
    <div>
      <form onSubmit="">
        <label>Name
          <input 
          type="text"
          name="name"
          onChange={onChange}
          value={values.name}
          />
        </label>
        <label>Email
          <input 
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
          />
        </label>
        <label>
          <select name="role">
            <option value="">---Select One---</option>
            <option value="Front-end">Front-End</option>
            <option value="Back-end">Back-End</option>
            <option value="Fullstack">Fullstack</option>
          </select>
        </label>

      </form>
    </div>
  )
}

export default Form
