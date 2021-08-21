import React, { useState, useEffect } from 'react';
import { listTodos } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

function ListTodo() {
  const [list, setlist] = useState([]);
  useEffect(() => {
    const fetch_todo = async () => {
      try {
        const todos = await API.graphql(graphqlOperation(listTodos));
        // console.log(todos.data.listTodos.items, 'fetched lists. ');
        setlist(todos.data.listTodos.items);
      } catch (e) {
        alert(e);
      }
    };
    fetch_todo();
  }, [list]);

  const mapList = () => {
    return list.map(e => {
      console.log(e.name);
      return (
        <li>
          <p>{e.name}</p>
        </li>
      );
    });
  };

  return (
    <div>
      listTodo
      <ul>{mapList()}</ul>
    </div>
  );
}

export default ListTodo;
