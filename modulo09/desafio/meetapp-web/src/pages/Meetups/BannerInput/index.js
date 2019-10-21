import React, { useState, useEffect, useRef } from 'react';
import { MdCameraAlt } from 'react-icons/md';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const { error } = useField('banner_id');

  const ref = useRef();

  useEffect(() => {
    if (defaultValue) {
      setFile(defaultValue.id);
      setPreview(defaultValue.url);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
            <div>
              <MdCameraAlt size={50} color="999" />
              <strong>Selecionar imagem</strong>
            </div>
          )}

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
        {error && <span>{error}</span>}
      </label>
    </Container>
  );
}
