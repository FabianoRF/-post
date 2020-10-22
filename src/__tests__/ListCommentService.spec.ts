import FakePostsRepository from '../repositories/fakes/FakePostsRepository';
import FakeCommentsRepository from '../repositories/fakes/FakeCommentsRepository';
import ListCommentService from '../services/ListCommentService';

describe('CreatePost', () => {
  it('should be able to list all comments pertaining to a post', async () => {
    const fakePostRepository = new FakePostsRepository();
    const fakeCommentRepository = new FakeCommentsRepository();
    const listComment = new ListCommentService(fakeCommentRepository);

    const post = await fakePostRepository.create('example message');

    const arrayComments = [
      {
        post_id: post.id,
        comment: 'message 1',
      },
      {
        post_id: post.id,
        comment: 'message 2',
      },
    ];

    await fakeCommentRepository.create(arrayComments[0]);
    await fakeCommentRepository.create(arrayComments[1]);

    const comment = await listComment.execute(post.id);

    expect(comment).toHaveLength(2);
  });
});
