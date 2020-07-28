import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import useStores from 'hooks/useStores';
import TodoListItem from 'components/TodoListItem';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;


function TodoList() {
  const { todo } = useStores();
  const { todos, editing, toggle, selectEditing, edit, remove } = todo;

  const list = todos.map(item => (
    <TodoListItem
      item={ item }
      key={ item.id }
      edit={ editing === item.id }
      onToggle={ toggle }
      onRemove={ remove }
      onSelectEditing={ selectEditing }
      onEdit={ edit }
    />
  ));

  return (
    <List>
      { list }
    </List>
  )
}

export default observer(TodoList);
