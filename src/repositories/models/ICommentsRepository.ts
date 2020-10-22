import Comment from '../../entities/Comment';
import ICreateCommentDTO from '../dtos/ICreateCommentDTO';

export default interface ICommentsRepository {
  create(data: ICreateCommentDTO): Promise<Comment>;
  findAll(post_id: number): Promise<Comment[] | Comment | undefined>;
}
