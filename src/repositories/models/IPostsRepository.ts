import Post from '../../entities/Post';

export default interface IPostRepository {
  create(message: string): Promise<Post>;
}
