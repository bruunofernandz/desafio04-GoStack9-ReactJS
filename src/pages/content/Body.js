import React, { Component } from "react";
import { render } from "react-dom";

import CommentList from "../comments/CommentList";

import Avatar from "../../../images/user.png";
import User from "../../../images/avatar.jpg";
import User01 from "../../../images/avatar2.jpg";
import User02 from "../../../images/avatar3.jpg";

import "./Styles.css";

class Body extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Bruno Fernando Alves",
          avatar: User,
        },
        date: "06 Jun 2020",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando ?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes ",
              avatar: User02,
              post:
                "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord (Sério, me chamem mesmo, esse comentário é real)",
            },
          },
        ],
      },

      {
        id: 2,
        author: {
          name: "Tatiane Alcantrará",
          avatar: User01,
        },
        date: "12 Jun 2020",
        content:
          "Fala galera, beleza ? Estou fazendo o Bootcamp da Rocketseat e está sendo muito massa! Alguém ai fazendo, comenta na publicação para trocarmos uma ideia",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa ",
              avatar: User02,
              post:
                "Também estou fazendo o bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha própria API dos desafios construída",
            },
          },
          {
            id: 1,
            author: {
              name: "Diego Fernandes ",
              avatar: User02,
              post:
                "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord (Sério, me chamem mesmo, esse comentário é real)",
            },
          },
        ],
      },
    ],
  };

  render() {
    return (
      <>
        <ul>
          {this.state.posts.map((post) => (
            <div class="content">
              <div class="container">
                <div class="user">
                  <div class="user-avatar">
                    <img src={post.author.avatar} alt="User" />
                  </div>
                  <div class="info">
                    <span class="name">{post.author.name}</span>
                    <span class="date">{post.date}</span>
                  </div>
                </div>

                <div class="user-post">
                  <span>{post.content}</span>
                </div>

                {post.comments.map((comment) => (
                  <CommentList props={comment} key={comment.id} />
                ))}
              </div>
            </div>
          ))}
        </ul>
      </>
    );
  }
}

export default Body;
