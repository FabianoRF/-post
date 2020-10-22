import { Router } from 'express';

const routes = Router();

routes.get('/posts', () => {});
routes.get('/posts/:id', () => {});
routes.post('/posts', () => {});

routes.get('/posts/:id/comments', () => {});
routes.post('/posts/:id/comments', () => {});
