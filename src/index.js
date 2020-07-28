import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TodoStore from 'stores/todo'

const todo = new TodoStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider todo={todo}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
