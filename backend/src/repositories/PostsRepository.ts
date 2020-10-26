import { getRepository, Repository } from 'typeorm';
import Post from '../entities/Post';
import IPostRepository from './models/IPostsRepository';

class PostsRepository implements IPostRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  public async create(message: string): Promise<Post> {
    const post = this.ormRepository.create({
      message,
      created_at: new Date(),
      updated_at: new Date(),
    });

    await this.ormRepository.save(post);

    return post;
  }

  public async findAll(): Promise<Post[] | undefined> {
    const posts = await this.ormRepository.find();

    return posts;
  }

  public async findById(id: number): Promise<Post | undefined> {
    const post = await this.ormRepository.findOne(id);

    return post;
  }
}

export default PostsRepository;
