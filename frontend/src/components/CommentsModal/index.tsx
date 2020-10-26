import React, { useCallback } from 'react';
import { FiX } from 'react-icons/fi';

import formatDate from '../../utils/formatDate';

import { Container } from './styles';

interface IModalProps {
  comments: {
    id: number;
    comment: string;
    updated_at: Date;
  }[];
  onClose(): void;
}

const CommentsModal: React.FC<IModalProps> = ({
  comments,
  onClose,
}: IModalProps) => {
  const handleClickX = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Container onClick={handleClickX}>
      {comments ? (
        <main>
          <header>
            Comentários
            <button type="button">
              <FiX size="30" />
            </button>
          </header>
          {comments.map(comment => (
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <span>{formatDate(comment.updated_at)}</span>
            </div>
          ))}
        </main>
      ) : (
        <h2>Carregando...</h2>
      )}
    </Container>
  );
};

export default CommentsModal;
