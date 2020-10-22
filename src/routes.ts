import { Router } from 'express';

import PostController from './controllers/PostController';
import CommentController from './controllers/CommentController';

const routes = Router();

routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.show);
routes.post('/posts', PostController.create);

routes.get('/posts/:id/comments', CommentController.show);
routes.post('/posts/:id/comments', CommentController.create);

export default routes;
