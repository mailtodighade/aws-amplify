import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from '../graphql/mutations';

function AddTodo() {
  const [item, setItem] = useState('');

  const save = async () => {
    const data = { name: item };
    await API.graphql(graphqlOperation(createTodo, { input: data }));
    console.log('success');

    try {
    } catch (e) {
      console.log(e, 'error');
    }
  };

  return (
    <div>
      <h1>TODO APPLICATION</h1>
      <input
        onChange={e => {
          setItem(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          save();
        }}
      >
        SAVE
      </button>
    </div>
  );
}

export default AddTodo;
