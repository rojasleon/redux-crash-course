import React, { Component } from 'react';

import Posts from './components/posts'
import PostForm from './components/post-form'

class App extends Component {
  render() {
    return (
      <div>
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default App;
