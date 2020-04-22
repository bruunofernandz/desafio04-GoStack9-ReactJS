import React, { Component } from "react";
import { render } from "react-dom";

import Avatar from "../../../images/user.png";

import "./Styles.css";

class Header extends Component {
  render() {
    return (
      <>
        <div class="header">
          <h1>Facebook</h1>

          <div class="perfil">
            <span>Meu perfil</span>
            <img src={Avatar} class="avatar" alt="Avatar" />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
