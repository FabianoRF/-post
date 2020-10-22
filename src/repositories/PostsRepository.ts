import { getRepository, Repository } from 'typeorm';
import Post from '../entities/Post';
import IPostRepository from './models/IPostsRepository';

class PostsRepository implements IPostRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  public async create(message: string): Promise<Post> {}
}

export default PostsRepository;
