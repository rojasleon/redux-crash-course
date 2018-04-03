import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  }

  handleChange = e => {
    const value = e.target.value
    this.setState({ [e.target.name]: value })
  }

  render() {
    const { title, body } = this.state
    console.log(title)
    return (
      <div>
        <h1>Add post</h1>
        <form>
          <div>
            <label>Title: </label><br />
            <input type="text" value={title}  onChange={this.handleChange}/>
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