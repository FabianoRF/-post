import React, { FormEvent, useCallback, useState } from 'react';
import { FiMessageSquare, FiFileText } from 'react-icons/fi';

import { Container } from './styles';

import formatDate from '../../utils/formatDate';
import api from '../../services/api';

interface IPostProps {
  postId: number;
  updated_at: Date;
  message: string;
  onClickViewComments(): void;
}

const Post: React.FC<IPostProps> = ({
  postId,
  message,
  updated_at,
  onClickViewComments,
}: IPostProps) => {
  const [commentInput, setCommentInput] = useState('');

  const handleSubmitComment = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      console.log(commentInput);

      const response = await api.post(`/posts/${postId}/comments`, {
        comment: commentInput,
      });

      if (response.status) {
        alert('Comentário publicado com sucesso!');
        setCommentInput('');
      } else {
        alert('O Comentário não foi publicado, tente novamente');
      }
    },
    [postId, commentInput],
  );

  return (
    <>
      <Container>
        <div>
          <strong>Postagem</strong>
          <span>{formatDate(updated_at)}</span>
        </div>
        <main>
          <p>{message}</p>

          <footer>
            <button type="button" onClick={onClickViewComments}>
              <FiFileText size="35" />
              Ver comentários
            </button>
          </footer>
        </main>

        <form onSubmit={handleSubmitComment}>
          <input
            placeholder="Digite aqui seu comentário..."
            type="text"
            name="comment"
            value={commentInput}
            onChange={e => {
              setCommentInput(e.target.value);
            }}
          />
          <button type="submit">
            <FiMessageSquare size="25" />
            Comentar
          </button>
        </form>
      </Container>
    </>
  );
};

export default Post;
