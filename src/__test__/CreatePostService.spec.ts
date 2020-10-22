import FakePostsRepository from '../repositories/fakes/FakePostsRepository';
import CreatePostService from '../services/CreatePostService';

describe('CreatePost', () => {
  it('should be able to create a new post.', async () => {
    const fakePostRepository = new FakePostsRepository();

    const createPost = new CreatePostService(fakePostRepository);

    const post = await createPost.execute('example');

    expect(post).toBeTruthy();
    expect(post).toHaveProperty('message');
  });
});
