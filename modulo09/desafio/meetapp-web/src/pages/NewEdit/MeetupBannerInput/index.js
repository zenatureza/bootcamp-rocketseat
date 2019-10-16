import React from 'react';
import { MdCameraAlt } from 'react-icons/md';

import { Container } from './styles';

export default function MeetupBannerInput() {
  function handleChange() { }

  return (
    <Container>
      <label htmlFor="banner">
        {/* <img src="" alt="" /> */}
        <div>
          <MdCameraAlt size={50} color="999" />
          <strong>Selecionar imagem</strong>
        </div>
        <input
          type="file"
          id="banner"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
