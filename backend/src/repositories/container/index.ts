import { container } from 'tsyringe';

import IPostsRepository from '../models/IPostsRepository';
import PostsRepository from '../PostsRepository';

import ICommentsRepository from '../models/ICommentsRepository';
import CommentsRepository from '../CommentsRepository';

container.registerSingleton<IPostsRepository>(
  'PostsRepository',
  PostsRepository,
);

container.registerSingleton<ICommentsRepository>(
  'CommentsRepository',
  CommentsRepository,
);
