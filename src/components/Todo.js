import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import TodoList from 'components/TodoList';
import useInput from 'hooks/useInput';
import useStores from 'hooks/useStores';

const Container = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.p`
  text-align: center;
  font-size: 0.9em;
`;

const Count = styled.span`
  font-weight: bold;
`

const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  background: none;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  font-family: inherit;
`;


function Todo() {
  const [title, onChange, setTitle] = useInput('');
  const { todo } = useStores();
  const { count, add } = todo;

  const handleSubmit = e => {
    e.preventDefault();
    setTitle('');
    add(title);
  }

  return (
    <Container>
      <Title>오늘 할 일을 내일로 미루자</Title>
      {
        count > 0 ?
        <Description>
          미룬 일: <Count>{ count }개</Count>
        </Description>
        :
        <Description>
          미룰 일을 입력하고 Enter를 누르면 저장돼요
        </Description>
      }
      <form onSubmit={handleSubmit}>
        <Input type="text"
          maxLength="100"
          name="title"
          placeholder="미룰 일 입력..."
          autoFocus
          value={title}
          onChange={onChange}
        />
      </form>
      <TodoList />
    </Container>
  )
}

export default observer(Todo);
