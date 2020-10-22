import Post from '../../entities/Post';
import IPostsRepository from '../models/IPostsRepository';

class FakePostsRepository implements IPostsRepository {
  private posts: Post[] = [];

  public async create(message: string): Promise<Post> {
    const post = new Post();

    Object.assign(post, {
      id: this.posts.length + 1,
      message,
      created_at: Date.now(),
      updated_at: Date.now(),
    });

    this.posts.push(post);

    return post;
  }

  public async findAll(): Promise<Post[] | undefined> {
    return this.posts;
  }

  public async findById(id: number): Promise<Post | undefined> {
    const postFinded = this.posts.find(post => post.id === id);

    return postFinded;
  }
}

export default FakePostsRepository;
