import { observable, action, computed } from 'mobx';
import { nanoid } from 'nanoid';

export default class TodoStore {
  @observable todos = [];
  @observable editing = null;

  search = id => {
    const index = this.todos.findIndex(todo => todo.id === id);
    return index;
  }

  @action
  add = title => {
    const index = this.search(title);
    if (index < 0) {
      this.todos.push({
        id: nanoid(),
        title: title,
        done: false,
      });
    }
  };

  @action
  toggle = id => {
    const index = this.search(id);
    this.todos[index].done = !this.todos[index].done;
  }

  @action
  selectEditing = id => {
    this.editing = id;
  }

  @action
  edit = (editedTitle, id) => {
    const index = this.search(id);
    this.todos[index].title = editedTitle;
    this.editing = null;
  }

  @action
  remove = id => {
    this.todos = this.todos.filter(item => item.id !== id);
  }

  @computed
  get count() {
    return this.todos.length;
  }
}
