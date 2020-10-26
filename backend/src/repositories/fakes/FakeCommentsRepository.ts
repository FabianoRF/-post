import Comment from '../../entities/Comment';
import ICommentsRepository from '../models/ICommentsRepository';
import ICreateCommentDTO from '../dtos/ICreateCommentDTO';

class FakeCommentRepository implements ICommentsRepository {
  private comments: Comment[] = [];

  public async create({
    post_id,
    comment,
  }: ICreateCommentDTO): Promise<Comment> {
    const newComment = new Comment();

    Object.assign(newComment, {
      id: this.comments.length + 1,
      comment,
      post_id,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.comments.push(newComment);

    return newComment;
  }

  public async findAll(
    post_id: number,
  ): Promise<Comment[] | Comment | undefined> {
    const findedComments = this.comments.filter(
      comment => comment.post_id === post_id,
    );

    return findedComments;
  }
}

export default FakeCommentRepository;
