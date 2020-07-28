import React from 'react';
import styled from 'styled-components';
import useInput from 'hooks/useInput';

const Item = styled.li`
  margin: 1em 0;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  flex: 1;
  padding: 0 .5em;
`;

const Button = styled.button`
  border: none;
  background: none;
  font-weight: 500;
  color: ${props => props.edit ? '#2980b9' : props.delete ? '#c0392b' : 'black' };
  display: inline-block;
  cursor: pointer;
  outline: none;
  font-family: inherit;

  &:hover {
    font-weight: 700;
  }
`

const Form = styled.form`
  display: block;
  width: 100%;
`;

const EditInput = styled.input`
  display: block;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  width: 100%;
  padding: .3em;
  box-sizing: border-box;
  outline: none;
  font-family: inherit;
  font-size: 1em;
`;

const Description = styled.p`
  font-size: .7em;
  margin: .1em 0;
`

export default function TodoListItem({ item, onToggle, onSelectEditing, onEdit, onRemove, edit }) {
  const [editingTitle, onChange] = useInput(item.title);

  const handleSubmit = e => {
    e.preventDefault();
    onEdit(editingTitle, item.id);
  }

  return (
    edit ?
    <Item>
      <Form onSubmit={handleSubmit}>
        <EditInput type="text"
          placeholder={ item.title }
          value={ editingTitle }
          onChange={ onChange }
          autoFocus
        />
        <Description>
          수정 입력 후 Enter키로 저장합니다.
        </Description>
      </Form>
    </Item>
    :
    <Item>
      <input type="checkbox"
        id={ item.id } 
        name={ item.id }
        defaultChecked={ item.done }
        onChange={ () => onToggle(item.id) }
      />
      <Label htmlFor={ item.id }>{ item.title }</Label>
      <div>
        <Button edit onClick={ () => onSelectEditing(item.id) }>수정</Button>
        <Button delete onClick={ () => onRemove(item.id) }>삭제</Button>
      </div>
    </Item>
  );
}