import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/post-actions'

class PostForm extends Component {
  static propTypes = {
    createPost: PropTypes.func.isRequired,
  }
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

    // Call action
    this.props.createPost(post)
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
export default connect(null, { createPost })(PostForm)