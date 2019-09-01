import React, { Component } from 'react';

import PostComments from './PostComments';
import PostHeader from './PostHeader';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    id: this.props.id,
    loggedUser: {
      name: 'Anônimo',
      avatar: 'https://pbs.twimg.com/profile_images/654162628240146432/FWQMP7Fv_400x400.jpg',
    },
    newComment: '',
    comments: this.props.data.comments,
  };

  /* > state handlers */
  handleInputChange = e => {
    this.setState({ newComment: e.target.value, });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.comments.length + 1,
          content: this.state.newComment,
          author: {
            name: this.state.loggedUser.name,
            avatar: this.state.loggedUser.avatar,
          },
        }
      ],
      newComment: '',
    });

    console.log(this.state);
  }

  render() {
    return (
      <form className="post">
        <PostHeader
          author={this.props.data.author}
          date={this.props.data.date} />

        <p className="post-content">{this.props.data.content}</p>

        <PostComments comments={this.state.comments} />

        <div className="newComment">
          <input
            type="text"
            placeholder="Digite um comentário"
            onChange={this.handleInputChange}
            value={this.state.newComment} />
          <button type="submit" onClick={this.handleSubmit}>
            Enviar
          </button>
        </div>
      </form>
    );
  }
}

export default Post;