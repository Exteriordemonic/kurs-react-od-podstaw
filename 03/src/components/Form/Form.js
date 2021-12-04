import React from 'react';

const Form = ({submitFn}) => (
  <form onSubmit={submitFn}>
      <input type="text" placeholder="name" name="name" defaultValue="Test"/>
      <input type="link" placeholder="link" name="link"/>
      <input type="text" placeholder="image" name="image"/>
      <textarea type="text" placeholder="description"/> 
      <button type="submit">Add new item</button>
  </form>
)

export default Form;