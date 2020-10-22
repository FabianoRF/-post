import FakePostsRepository from '../repositories/fakes/FakePostsRepository';
import FakeCommentsRepository from '../repositories/fakes/FakeCommentsRepository';
import CreateCommentService from '../services/CreateCommentService';

describe('CreatePost', () => {
  it('should be able to create a new comment pertaining to a post', async () => {
    const fakePostRepository = new FakePostsRepository();
    const fakeCommentRepostiry = new FakeCommentsRepository();

    const createComment = new CreateCommentService(fakeCommentRepostiry);
    const post = await fakePostRepository.create('example');

    const comment = await createComment.execute({
      post_id: post.id,
      comment: 'new comment',
    });

    expect(comment).toBeTruthy();
    expect(comment).toHaveProperty('post_id', post.id);
  });
});
