import { inject, injectable } from 'tsyringe';

import Post from '../entities/Post';
import IPostsRepository from '../repositories/models/IPostsRepository';

@injectable()
export default class ListPostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  public async execute(id?: number): Promise<Post[] | Post | undefined> {
    const posts = id
      ? this.postsRepository.findById(id)
      : this.postsRepository.findAll();

    return posts;
  }
}
