import React, { useCallback, useState, FormEvent } from 'react';
import { FiArrowLeftCircle, FiUpload } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

import api from '../../services/api';

const CreatePost: React.FC = () => {
  const history = useHistory();
  const [postMessage, setPostMessage] = useState('');

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      await api.post('/posts', {
        message: postMessage,
      });

      alert('Postagem concluida com sucesso!');

      history.push('/');
    },
    [postMessage, history],
  );

  return (
    <Container>
      <header>
        <div>
          <h1>@Posts</h1>
          <Link to="/">
            <FiArrowLeftCircle size="40" />
            Voltar
          </Link>
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <label htmlFor="message">
          Digite seu post:
          <textarea
            id="message"
            value={postMessage}
            onChange={e => {
              setPostMessage(e.target.value);
            }}
          />
        </label>
        <button type="submit">
          <FiUpload size="30" />
          Postar
        </button>
      </form>
    </Container>
  );
};

export default CreatePost;
