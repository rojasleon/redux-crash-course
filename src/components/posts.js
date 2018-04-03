import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchPosts } from '../actions/post-actions'

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    newPost: PropTypes.object
  }
  componentDidMount() {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }
  render() {
    const { posts } = this.props
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

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item
})



export default connect(mapStateToProps, { fetchPosts })(Posts)