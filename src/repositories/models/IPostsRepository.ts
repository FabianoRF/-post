import Post from '../../entities/Post';

export default interface IPostsRepository {
  create(message: string): Promise<Post>;
  findAll(): Promise<Post[] | undefined>;
  findById(id: number): Promise<Post | undefined>;
}
