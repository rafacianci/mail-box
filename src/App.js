import React from 'react';
import 'bulma/css/bulma.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import EmailList from './sections/EmailList';
import EmailContent from './sections/EmailContent';
import reducers from './reducers';
import './App.css';

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk),
);

const App = () => (
  <Provider store={store}>
    <div className='App'>
      <h2 className='App-header container'>Mail Box</h2>
      <div className='container sectionsContainer'>
        <div className='sections'>
          <EmailList />
        </div>
        <EmailContent />
      </div>
    </div>
  </Provider>
);

export default App;
