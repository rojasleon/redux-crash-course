import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { title, body } = this.state

    const post = {
      title,
      body
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const data = await response.json()
    console.log(data)
  }

  handleChange = e => {
    const value = e.target.value
    const name = e.target.name
    this.setState({ [name]: value})
  }

  render() {
    const { title, body } = this.state
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label><br />
            <input name="title" type="text" value={title}  onChange={this.handleChange}/>
          </div>
          <div>
            <label>Body: </label><br />
            <textarea name="body" value={body} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default PostForm