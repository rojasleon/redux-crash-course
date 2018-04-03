import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './store'

// Form Components
import Posts from './components/posts'
import PostForm from './components/post-form'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
