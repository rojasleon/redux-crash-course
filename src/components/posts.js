import React, { Component } from 'react';

class Posts extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts`)
    const posts = await response.json()
    this.setState(() => ({ posts }))
  }
  render() {
    const { posts } = this.state
    return (
      <div>
        <h1>Posts</h1>
        {posts.map(({id, title, body}) => (
          <div key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Posts