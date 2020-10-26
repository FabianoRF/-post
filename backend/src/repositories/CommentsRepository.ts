import { getRepository, Repository } from 'typeorm';
import Comment from '../entities/Comment';
import ICommentsRepository from './models/ICommentsRepository';
import ICreateCommentDTO from './dtos/ICreateCommentDTO';

class CommentsRepository implements ICommentsRepository {
  private ormRepository: Repository<Comment>;

  constructor() {
    this.ormRepository = getRepository(Comment);
  }

  public async create({
    post_id,
    comment,
  }: ICreateCommentDTO): Promise<Comment> {
    const newComment = this.ormRepository.create({
      comment,
      post_id,
      created_at: new Date(),
      updated_at: new Date(),
    });

    await this.ormRepository.save(newComment);

    return newComment;
  }

  public async findAll(
    post_id: number,
  ): Promise<Comment[] | Comment | undefined> {
    const comments = await this.ormRepository.find({
      where: {
        post_id,
      },
    });

    if (comments.length === 0) {
      return undefined;
    }

    return comments;
  }
}

export default CommentsRepository;
