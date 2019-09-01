import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" />
        <div>
          <span>Meu perfil</span>
          <img
            className="userAvatar"
            src="https://pbs.twimg.com/profile_images/654162628240146432/FWQMP7Fv_400x400.jpg" />
        </div>
      </nav>
    </header>
  );
}

export default Header;