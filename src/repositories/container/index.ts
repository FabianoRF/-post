import { container } from 'tsyringe';

import IPostRepository from '../models/IPostsRepository';
import PostsRepository from '../PostsRepository';

container.registerSingleton<IPostRepository>('PostRepository', PostsRepository);
