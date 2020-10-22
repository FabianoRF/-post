import { inject, injectable } from 'tsyringe';

import Comment from '../entities/Comment';
import ICommentsRepository from '../repositories/models/ICommentsRepository';

@injectable()
export default class ListCommentService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,
  ) {}

  public async execute(
    post_id: number,
  ): Promise<Comment[] | Comment | undefined> {
    const post = await this.commentsRepository.findAll(post_id);

    return post;
  }
}
