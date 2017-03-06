import React from 'react'
import Form from 'components/core/form'
import _ from 'lodash'
import Todo from './todo'

export default (props) =>
  <div>
    {_.map(props.todos, (todo) => <Todo todo={todo} key={todo.id} onTodoDeleted={props.onTodoDeleted} onTodoCompleted={props.onTodoCompleted} />)}
    <p>Add a Todo</p>
    <Form onSubmit={() => props.onTodoAdded()}>
      <input onChange={(e) => props.onUpdateTodoText(e.target.value)} value={props.currentlyEditingTodoText} />
      <button>Add</button>
    </Form>
  </div>
