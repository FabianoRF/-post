import { inject, injectable } from 'tsyringe';

import Comment from '../entities/Comment';
import ICommentsRepository from '../repositories/models/ICommentsRepository';
import ICreateCommentDTO from '../repositories/dtos/ICreateCommentDTO';

@injectable()
export default class CreatePostService {
  constructor(
    @inject('IPostsRepository')
    private commentsRepository: ICommentsRepository,
  ) {}

  public async execute(data: ICreateCommentDTO): Promise<Comment> {
    const post = await this.commentsRepository.create(data);

    return post;
  }
}
