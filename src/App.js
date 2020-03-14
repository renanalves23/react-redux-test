import React from 'react';
import { Provider } from 'react-redux'
import store from './store'

import Sidebar from './Sidebar';
import Video from './Video';

function App() {
 
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
