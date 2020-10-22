import { inject, injectable } from 'tsyringe';

import Post from '../entities/Post';
import IPostsRepository from '../repositories/models/IPostsRepository';

@injectable()
export default class CreatePostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  public async execute(message: string): Promise<Post> {
    const post = await this.postsRepository.create(message);

    return post;
  }
}
