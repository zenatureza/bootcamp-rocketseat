import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Árthur Tolfo Pinheiro',
          avatar: 'https://scontent.fria2-1.fna.fbcdn.net/v/t1.0-9/67748194_2380453062001316_6919559258681901056_n.jpg?_nc_cat=100&_nc_oc=AQmL04vvhdRM9iMPZer80myolvQNhmW4LR-aiSmplwR6ObazvvzrRfhv8I6gRNgu65pKZ-x5pfAqlhx62Pw_1CCf&_nc_ht=scontent.fria2-1.fna&oh=7bc5cf3a04c3a8b1a6d2358c6759e1f8&oe=5DC84F08'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars1.githubusercontent.com/u/2254731?s=400&v=4'
            },
            content: "Boa tarde, Árthur!"
          }
        ],
      },
    ]
  };

  render() {
    return (
      <div className="postlist">
        <ul>
          {this.state.posts.map(post => <Post key={post.id} data={post} />)}
        </ul>
      </div>
    );
  }
}

export default PostList;
