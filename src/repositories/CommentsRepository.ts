import { getRepository, Repository } from 'typeorm';
import Comment from '../entities/Comment';
import ICommentsRepository from './models/ICommentsRepository';

class CommentsRepository implements ICommentsRepository {
  private ormRepository: Repository<Comment>;

  constructor() {
    this.ormRepository = getRepository(Comment);
  }

  public async create(message: string): Promise<Comment> {}
}

export default CommentsRepository;
