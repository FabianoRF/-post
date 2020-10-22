import Post from '../../entities/Post';
import IPostRepository from '../models/IPostsRepository';

class FakePostsRepository implements IPostRepository {
  private posts: Post[] = [];

  public async create(message: string): Promise<Post> {
    const post = new Post();

    Object.assign(post, {
      message,
      created_at: Date.now(),
      updated_at: Date.now(),
    });

    this.posts.push(post);

    return post;
  }
}

export default FakePostsRepository;
