import FakePostsRepository from '../repositories/fakes/FakePostsRepository';
import ListPostService from '../services/ListPostService';

describe('ListPosts', () => {
  it('should be able to list all posts', async () => {
    const fakePostRepository = new FakePostsRepository();
    const listPost = new ListPostService(fakePostRepository);

    await fakePostRepository.create('post1');
    await fakePostRepository.create('post2');

    const posts = await listPost.execute();

    expect(posts).toHaveLength(2);
  });

  it('should be able to list a post by id', async () => {
    const fakePostRepository = new FakePostsRepository();
    const listPost = new ListPostService(fakePostRepository);

    await fakePostRepository.create('post1');
    await fakePostRepository.create('post2');

    const post = await listPost.execute(1);

    expect(post).toBeTruthy();
    expect(post).toHaveProperty('id', 1);
  });
});
