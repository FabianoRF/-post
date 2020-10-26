import React, { useState, useEffect, useCallback } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Post from '../../components/Post';
import CommentsModal from '../../components/CommentsModal';
import { Container } from './styles';
import api from '../../services/api';

interface IPost {
  id: number;
  message: string;
  updated_at: Date;
}

interface IComment {
  id: number;
  comment: string;
  post_id: number;
  updated_at: Date;
}

const DashBoard: React.FC = () => {
  const [isVisibleModal, setIsvisibleModal] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/posts');

      setPosts(response.data);
    }

    loadData();
  }, []);

  const handleDisplayModalComments = useCallback(async (id: number) => {
    setComments([]);
    setIsvisibleModal(true);

    const response = await api.get(`posts/${id}/comments`);

    const newComments = response.data.map((comment: IComment) => {
      return {
        id: comment.id,
        comment: comment.comment,
        updated_at: comment.updated_at,
      };
    });

    setComments(newComments);
  }, []);

  return (
    <>
      <Container>
        <header>
          <div>
            <h1>@Posts</h1>

            <Link to="/post/create">
              <FiPlus size="40" />
              Novo Post
            </Link>
          </div>
        </header>

        {posts.map(post => (
          <Post
            key={post.id}
            postId={post.id}
            message={post.message}
            updated_at={post.updated_at}
            onClickViewComments={() => {
              handleDisplayModalComments(post.id);
            }}
          />
        ))}
      </Container>

      {isVisibleModal && (
        <CommentsModal
          comments={comments}
          onClose={() => {
            setIsvisibleModal(false);
          }}
        />
      )}
    </>
  );
};

export default DashBoard;
